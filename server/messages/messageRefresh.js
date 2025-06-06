import mongoose from "mongoose";
import axios from "axios";
import { io } from "../socket.js";
import messageModel from "./messageModel.js";

const messageRefresh = async (req, res, done) => {
  const { username, avatar } = req.user;
  const { socketId } = req.params
  console.log(username, socketId);
  try {
    const getLast50Messages = await messageModel
      .find()
      .sort({ _id: 1 })
      .limit();
    console.log(getLast50Messages);
    // Emit only to user who is refreshing
    io.to(socketId).emit("welcome-room-message-refresh", getLast50Messages);
    res.status(200).json({ success: true, messages: getLast50Messages });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      success: false,
      message: "There was an error in creating the message.",
    });
  }
};

export default messageRefresh;


// Aggregate sorting last messages by room

// const getLast8MessagesByRoom = await messageModel.aggregate([
//   {
//     $sort: { _id: 1}
//   },
//   {
//     $group: {
//       "_id": "$room",
//       "messages": { "$addToSet": "$$ROOT"}
//     }
//   },
//   {
//     $project: {
//       messages: {
//         $slice: [
//           {
//             $sortArray: {
//               input: "$messages",
//               sortBy: {
//                 _id: 1
//               }
//             }
//           },
//           8
//         ]
//       }
//     }
//   }
// ])