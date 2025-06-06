import mongoose from "mongoose";
import axios from "axios";
import { io } from "../socket.js";
import model from "./model.js"

const userListRefresh = async (req, res, done) => {
  const { username, avatar } = req.user;
  const { socketId } = req.params;
  console.log(username, socketId);
  try {
    const getOnlineUserList = await model.find()
    console.log(getOnlineUserList);
    // Emit only to user who is refreshing
    io.to(socketId).emit("getOnlineUsers", getOnlineUserList);
    res.status(200).json({ success: true, users: getOnlineUserList });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      success: false,
      message: "There was an error in creating the message.",
    });
  }
};

export default userListRefresh;
