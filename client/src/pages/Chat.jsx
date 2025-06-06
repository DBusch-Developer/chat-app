import { useState, useEffect } from "react";
import Groups from "../components/Groups";
import People from "../components/People";
import Search from "../components/Search";
import Messages from "../components/Messages";
import OnlineUsers from "../components/OnlineUsers";

const Chat = ({ messages, welcomeJoined, users, room, rooms, setRooms, usersList }) => {
  // const [message, setMessage] = useState("");

  const user = JSON.parse(sessionStorage.getItem("user")) || {
    id: "",
    email: "",
    username: "",
    avatar: "",
    status: "",
  };

  useEffect(() => {
    console.log("welcomeJoined", welcomeJoined);
  }, [welcomeJoined]);

  return (
    <>
      <div className="flex ">
        <div className="">
          <Search />
          <Groups
            // message={message}
            // setMessage={setMessage}
            room={room}
            welcomeJoined={welcomeJoined}
            rooms={rooms}
            setRooms={setRooms}
          />
          <People 
          usersList={usersList}
          />
        </div>

        <div className="flex flex-col justify-between m-5 ml-10 shadow bg-white rounded w-1/2 ">
          <div className="">
            <div className="flex justify-between gap-x-6 p-7 border">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="size-12 flex-none rounded-full bg-gray-50"
                  src={new URL(`../assets/${room.avatar}`, import.meta.url).href}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
               
                  <h1 className="text-xl text-gray-900">{room.name}</h1>
                  <p className="mt-1 truncate text-xs/5 text-gray-500">
                    Online - Last seen, 2:02pm
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <svg
                  className="h-5 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <svg
                  className="h-5 ml-5 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
                </svg>
                <svg
                  className="h-5 ml-5 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 512"
                >
                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
              </div>
            </div>
          </div>

          <Messages
            messages={messages}
            // events={events}
            // setEvents={setEvents}
            welcomeJoined={welcomeJoined}
            users={users}
            room={room}
          />
        </div>
        <OnlineUsers welcomeJoined={welcomeJoined} users={users} />
      </div>
    </>
  );
};

export default Chat;
