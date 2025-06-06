import { useState, useEffect } from "react";
import { socket } from "../socket";

const Groups = ({  welcomeJoined, room, rooms, setRooms }) => {
  const user = JSON.parse(sessionStorage.getItem("user")) || {"id": "", "email": "", "username": "", "avatar": "", "status": ""}
  // const [isLoading, setIsLoading] = useState(false);
 


  useEffect(() => {
    console.log("welcomeJoined", welcomeJoined);
  }, [welcomeJoined]);

  useEffect(() => {
    socket.timeout(1500).emit("Welcome joined", user);
  }, []);

  const handleJoinRoom = (room) => {
      console.log("room", room);
      // setIsLoading(true);
      // Join room
      // socket.timeout(1500).emit(`${room.name} joined`, "User object", () => {
      //   setIsLoading(false);
      // });
      // Update selected room
      setRooms(
        rooms.map((r) =>
          r.name === room.name
            ? { ...r, isActive: true }
            : { ...r, isActive: false }
        )
      );
      // Clear message field
      // setMessage("");
    };

  return (
    <>
      <div className="m-5 shadow  w-full rounded bg-white ">
        <h1 className="text-xl p-7">Groups</h1>
        <ul role="list" className="pl-7 pr-7 pb-7 divide-y divide-gray-100 overflow-y-auto h-57">
        {rooms.map((room, index) => (
              
              <li key={index} onClick={() => handleJoinRoom(room)} className={`flex justify-between gap-x-6 pl-2 pr-2 py-5 w-full cursor-pointer ${room.isActive ? "bg-gray-100 rounded-lg " : "bg-white"}`}>
            <div className="flex min-w-0 gap-x-4">
              <img
                className="size-12 flex-none rounded-full bg-gray-50"
                src={new URL(`../assets/${room.avatar}`, import.meta.url).href}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {room.name}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  Blahblahblah!
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
              </p>
              <div className="mt-1 bg-green-200 rounded-full w-4 h-4 flex pl-1 items-center">
                <p className="text-xs/5 text-gray-900">5</p>
              </div>
            </div>
          </li>
            ))}
          
        </ul>
      </div>
    </>
  );
};

export default Groups;
