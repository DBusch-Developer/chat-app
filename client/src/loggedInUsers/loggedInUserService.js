import axios from "axios";

export const getLoggedInUsers = async (token, socketId) => {
  console.log("loggedInUsersService getLoggedInUsers token", token);
  const response = await axios.get(
    `${import.meta.env.VITE_API_SERVER_URL}/loggedinusers/refresh/${socketId}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  response.data;
};
