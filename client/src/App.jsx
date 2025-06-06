import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { socket } from "./socket";
import axios from "axios";
import { getMessagesOnRefresh } from "./messages/messageService";
import { getLoggedInUsers } from "./loggedInUsers/loggedInUserService";
import PrivateRoute from "./pages/PrivateRoute";
import { ConnectionState } from "./ConnectionState";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import DashboardLayout from "./layout/DashboardLayout";
import Notifications from "./pages/Notifications";
import Contacts from "./pages/Contacts";
import Settings from "./pages/Settings";
import "./App.css";

function App({ room }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [loggedInUser, setLoggedInUser] = useState();
  const [isConnected, setIsConnected] = useState(socket.connected);
  // const [socketId, setSocketId] = useState(socket.id)
  const [welcomeJoined, setWelcomeJoined] = useState({});
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([
    { name: "Welcome", avatar: "tech_mic.jpg", isActive: true },
    { name: "Friends Forever", avatar: "friends.JPG", isActive: false },
    { name: "Hiking", avatar: "img103.png", isActive: false },
    { name: "JavaScript", avatar: "words.PNG", isActive: false },
  ]);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const getUsersList = async () => {
      const userData = await axios.get(
        `${import.meta.env.VITE_API_SERVER_URL}/users`
      );
      console.log("userData", userData);
      setUsersList(userData.data.users);
    };
    getUsersList();
    console.log("usersList", usersList);
  }, []);

  useEffect(() => {
    const refresh = async (socketId) => {
      console.log("sockedId", socketId);
      const token = sessionStorage.getItem("token");
      if (token) {
        const messageResponse = await getMessagesOnRefresh(token, socketId);
        // TODO: Also refresh online user list
        const loggedInResponse = await getLoggedInUsers(token, socketId)
      }
    };

    // TODO: This is a patch for Chrome refresh problem. Look up a more robust solution.

    if (socket.id) {
      refresh(socket.id);
    }

    function onConnect() {
      setIsConnected(true);
      // setSocketId(socket.id)
      refresh(socket.id);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    const onWelcomeJoined = (roomList) => {
      console.log("onWelcomeJoined value", roomList);
      setWelcomeJoined(roomList);
    };

    function onWelcomeMessage(msg) {
      console.log("msg", msg);
      setMessages((previous) => [...previous, msg]);
    }

    function onWelcomeMessageRefresh(msgs) {
      console.log("msgs", msgs);
      setMessages((previous) => [...previous, ...msgs]);
    }

    function onGetOnlineUsers(userList) {
      console.log("onGetOnlineUsers", userList);
      setUsers(userList);
    }


    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("Welcome joined", onWelcomeJoined);
    socket.on("welcome-room-message", onWelcomeMessage);
    socket.on("welcome-room-message-refresh", onWelcomeMessageRefresh);
    socket.on("getOnlineUsers", onGetOnlineUsers);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("Welcome joined", onWelcomeJoined);
      socket.off("welcome-room-message", onWelcomeMessage);
      socket.off("welcome-room-message-refresh", onWelcomeMessageRefresh);
      socket.off("getOnlineUsers", onGetOnlineUsers);
    };
  }, []);

  return (
    <>
      {/* <ConnectionState isConnected={ isConnected } /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              // loggedInUser={loggedInUser}
              // setLoggedInUser={setLoggedInUser}
            />
          }
        />

        <Route element={<PrivateRoute />}>
          <Route
            element={
              <DashboardLayout
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                // loggedInUser={loggedInUser}
                // setLoggedInUser={setLoggedInUser}
              />
            }
          >
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/chat"
              element={
                <Chat
                  messages={messages}
                  users={users}
                  welcomeJoined={welcomeJoined}
                  room={rooms.filter((room) => room.isActive === true)[0]}
                  rooms={rooms}
                  setRooms={setRooms}
                  usersList={usersList}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <Contacts
                  usersList={usersList}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/notifications"
              element={
                <Notifications
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />

            <Route
              path="/settings"
              element={
                <Settings
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
