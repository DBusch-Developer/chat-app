import userModel from "../user/userModel.js";
import loggedInUserModel from "../loggedInUsers/model.js";
import { io } from "../socket.js";

const authLogout = async (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: "Not authenticated." });
  }
  try {
    // Remove user token
    const removeToken = await userModel.updateOne(
      { _id: req.user._id },
      { token: [] }
    );

    //Remove user from loggedInUsers
    const removeFromLoggedInUsers = await loggedInUserModel.deleteMany({
      username: req.user.username,
    });

    // Socket broadcast new logged in user and return all logged in users
    const getLoggedInUsers = await loggedInUserModel.find({});
    // TODO?: refactor array into map?
    io.emit("getOnlineUsers", getLoggedInUsers);

    // Passport/Express logout
    req.logout((err) => {
      if (err) {
        return res.status(400);
      }
      res.status(200).json({ success: true, message: "Logged out." });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Logged out." });
  }
};

export default authLogout;
