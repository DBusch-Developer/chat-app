import userModel from "./userModel.js"

const userGetMany = async (req, res) => {
  
  const users = await userModel.find()
  console.log("users", users)
  res.status(200).json({ success: true, "users": users });
};

export default userGetMany;