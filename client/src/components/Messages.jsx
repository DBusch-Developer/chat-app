import { useState, useEffect } from "react";
import { socket } from "../socket";
import { createMessage } from "../messages/messageService";
import Emojis from "./Emojis";
import Image from "./Image";

const Messages = ({ messages, welcomeJoined, users, room }) => {
  const user = JSON.parse(sessionStorage.getItem("user")) || {
    id: "",
    email: "",
    username: "",
    avatar: "",
    status: "",
  };

  const [message, setMessage] = useState("");
  // const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Scroll to the bottom of the messages div when new messages are added
    const messagesDiv = document.getElementById("messages");
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, [messages, room]);

  useEffect(() => {
    console.log("messages", messages);
  }, [messages]);

  useEffect(() => {
    console.log("welcomeJoined", welcomeJoined);
  }, [welcomeJoined]);

  useEffect(() => {
    setMessage("");
  }, [room]);

  useEffect(() => {
    socket.timeout(1500).emit("Welcome joined", user);
  }, []);

  const sendMessage = async (e) => {
    const token = sessionStorage.getItem("token");

    if (token && message) {
      // const newMessage = {
      //   // id: Date.now(),
      //   text: message,
      //   time: new Date().toLocaleTimeString([], {
      //     hour: "2-digit",
      //     minute: "2-digit",
      //   }),
      // };
      // console.log("newMessage", newMessage);
      // socket.timeout(1).emit("welcome-room-message", newMessage, () => {
      //   setIsLoading(false);
      // });
      const response = await createMessage(
        token,
        room.name.toLowerCase(),
        message
      );
      setIsLoading(false);
      // setIsLoading(true);
      setMessage("");
    }
  };

  let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

  return (
    <>
      {/* Chat message container div */}
      <div className="flex flex-col justify-end container">
        <div id="messages" className="overflow-y-scroll">
          {/* Chat bubble right */}
          {/* {messages.map((message, index) => (
            <div
              key={index}
              className="chat-right flex flex-col justify-end items-end text-wrap"
            >
              <div className="mr-10 mb-5 p-3 max-w-1/2 bg-green-200 rounded-lg flex justify-end">
                <p className="z-40 text-wrap">{message.message}</p>
                <p className="flex items-end ml-3 z-40 timestamp text-wrap">
                  {message.timestamp}
                </p>
              </div>
              <div className="chat-bubble-right"></div>
            </div>
          ))} */}

          {/* Chat bubble left */}
          {/* {messages.filter(msg => msg.room ===  room.name.toLowerCase()).map((message, index) => (
            <div
              key={index}
              className="chat-left flex flex-row justify-start items-center text-wrap"
            >
             
                <img
                  className="ml-2 size-10 rounded-full bg-gray-50"
                  src={`${message.avatar}`}
                  alt=""
                />
             
              <div className="ml-6 mb-5 p-3 max-w-1/2 bg-gray-200 rounded-lg flex justify-end">
                <p className="flex justify-end z-40 text-wrap">
                  {message.message}
                </p>
                
                <p className="flex items-end ml-1 z-40 timestamp text-nowrap">
                  {new Date(message.timestamp).toLocaleString("en-US")}
                  
                </p>
              </div>
              <div className="chat-bubble-left"></div>
            </div>
          ))} */}
          {messages
            .filter((msg) => msg.room === room.name.toLowerCase())
            .map((message, index) => (
              <div
                key={index}
                className={`${
                  message.username === userData.username
                    ? "chat-right flex flex-col justify-end items-end text-wrap"
                    : "chat-left flex flex-row justify-start items-center text-wrap"
                }`}
              >
                <img
                  className={`${
                    message.username === userData.username
                      ? "hidden"
                      : "ml-2 size-10 rounded-full bg-gray-50"
                  }`}
                  src={`${message.avatar}`}
                  alt=""
                />

                <div className={`${
                    message.username === userData.username
                      ? "mr-10 mb-5 p-3 max-w-1/2 bg-green-200 rounded-lg flex justify-end"
                      : "ml-6 mb-5 p-3 max-w-1/2 bg-gray-200 rounded-lg flex justify-end"
                  }`}>
                  <p className={`${
                    message.username === userData.username
                      ? "z-40 text-wrap"
                      : "flex justify-end z-40 text-wrap"
                  }`}>
                    {message.message}
                  </p>

                  <p className={`${
                    message.username === userData.username
                      ? "flex items-end ml-3 z-40 timestamp text-wrap"
                      : "flex items-end ml-1 z-40 timestamp text-nowrap"
                  }`}>
                    {new Date(message.timestamp).toLocaleString("en-US")}
                  </p>
                </div>
                <div className={`${
                    message.username === userData.username
                      ? "chat-bubble-right"
                      : "chat-bubble-left"
                  }`}></div>
              </div>
            ))}
        </div>
        {/* End */}
      </div>
      {/* End */}

      <div className="border-top p-7 flex flex-row items-center">
        <div className="w-full">
          <svg
            className="h-6 absolute top-185 left-185 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z" />
          </svg>
          <input
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pl-12 pr-32 w-full h-15  bg-gray-100 rounded "
            placeholder="Type your message here..."
          />
          <Emojis />
          <Image />
          <svg
            className="h-6 absolute top-185 left-342 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
          </svg>
        </div>
        <div className="bg-gray-100 h-15 w-20 rounded ml-4 flex items-center ">
          <button disabled={isLoading} onClick={sendMessage} type="button">
            <svg
              className="h-10 ml-4 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {" "}
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Messages;
