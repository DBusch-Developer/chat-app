import mongoose from "mongoose";
import loggedInUserModel from "./model.js";

const loggedInUserCreate = async (req, res, done) => {
  const { firstName, lastName, username, avatar } = req.body;
  console.log(firstName, lastName, username);
  // TODO: Check if the user is already logged in
  const createLoggedInUser = await loggedInUserModel.create({
    firstName,
    lastName,
    username,
    avatar,
  });
  res.status(200).json({ message: "You did it!" });
};

export default loggedInUserCreate;
