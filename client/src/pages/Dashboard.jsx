import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { status } from "../auth/authService";
import axios from "axios"
import { avatar } from "../auth/authService";

const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
   console.log(avatarFile)
  }, [avatarFile])
  
  useEffect(() => {
    const checkStatus = async () => {
      setIsLoggedIn(true);
      const token = sessionStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
      const response = await status(token);
      console.log(response.data);
    };
    checkStatus();
  }, []);

  useEffect(() => {
    console.log("Is logged in:", isLoggedIn);
  }, [isLoggedIn]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  // async function Main() {
  //   const file = document.querySelector("#myfile".files[0]);
  //   console.log(await toBase64(file));
  // }

  const handleFile = async (e) => {
    console.log("handleFile", e);
    if (e.target.files) {
      const testString64 = await toBase64(e.target.files[0])
      console.log("testString64", testString64)
      const token = sessionStorage.getItem("token")
      const avatarResponse = await avatar(token, testString64)
      console.log(avatarResponse)
      setAvatarFile(e.target.files[0])
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center w-1/2">
          {/* <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input 
            onChange={handleFile}
            id="dropzone-file" 
            type="file" 
            className="hidden" />
          </label> */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
          <input onChange={handleFile} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
