import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { io } from "../socket.js";
import userModel from "../user/userModel.js";
import loggedInUserModel from "../loggedInUsers/model.js";

const jwtSecret = process.env.JWT_SECRET || "secret";
const tokenExpiration = process.env.TOKEN_EXPIRATION || 60 * 60 * 24 * 30; // 30 days

const cookieOptions = {
  httpOnly: true,
  secure: false, // https
  signed: true,
  maxAge: tokenExpiration,
  sameSite: "none",
  domain: "localhost",
  path: "/",
};

const createToken = (user) => {
  console.log("createToken user", user);
  return jwt.sign(user, jwtSecret, { expiresIn: tokenExpiration });
};

const login = async (req, res, next) => {
  const { _id } = req.user;
  console.log("login _id", _id);
  const token = createToken({ _id });
  console.log("login token", token);
  try {
    // Login
    const user = await userModel.findOne({ _id });
    console.log("login user", user);
    if (user.token) {
      user.token.push({ token });
      user.lastLogin = new Date()
    } else {
      user.token = [{ token }];
    }
    user.save();

    // Check to see if user is already logged in (whether there is an error or not)
    const isUserLoggedIn = await loggedInUserModel.find({
      username: user.username,
    });
    console.log("isUserLoggedIn", isUserLoggedIn);

    if (isUserLoggedIn.length > 0) {
      // Remove them
      const logUserOut = await loggedInUserModel.deleteMany({
        username: user.username,
      });
      // Remove user token
      const removeToken = await userModel.updateOne(
        { _id: req.user._id },
        { token: [] }
      );
    }

    // Add to logged in users
    const setLoggedInUser = await loggedInUserModel.create({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      avatar: user.avatar,
    });

    // Socket broadcast new logged in user and return all logged in users
    const getLoggedInUsers = await loggedInUserModel.find({});
    // TODO?: refactor array into map?
    io.emit("getOnlineUsers", getLoggedInUsers);

    res.cookie("token", token, cookieOptions);
    res.status(200).json({ success: true, token, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "There was an error." });
  }
};

export default login;
