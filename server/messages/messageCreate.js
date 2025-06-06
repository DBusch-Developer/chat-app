import mongoose from "mongoose";
import axios from "axios";
import { io } from "../socket.js";
import messageModel from "./messageModel.js";

const messageCreate = async (req, res, done) => {
  const { room, message } = req.body;
  const { username, avatar } = req.user;
  console.log(message, username);
  try {
    const createMessage = await messageModel.create({
      room,
      username,
      avatar,
      message,
      timestamp: new Date(),
    });
    console.log(createMessage);
    io.emit("welcome-room-message", createMessage);
    // Check for chatbot conversations
    if (message.includes("@chatbot")) {
      console.log("robots rise!");
      const chatResponse = await axios.post(process.env.OLLAMA_API, {
        model: "mistral",
        prompt: message,
        num_predict: 42,
      });

      console.log("chatResponse", chatResponse);
      let responseText = ""
      const responseLines = chatResponse.data.split("\n")
      for (const d of responseLines) {
        try {
          const obj = JSON.parse(d)
          console.log(obj.response)
          responseText += obj.response
        }
        catch (err) {
          // Do nothing but log
          console.log("This llama won't make donuts")
        }
      }
      const createBotMessage = await messageModel.create({
        room,
        username: "@chatbot",
        avatar: "data:image/jpeg;base64,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",
        message: responseText,
        timestamp: new Date(),
      });
      io.emit("welcome-room-message", createBotMessage);
    }
    res.status(200).json({ success: true, message: "Message created!" });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      success: false,
      message: "There was an error in creating the message.",
    });
  }
};

export default messageCreate;
