import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { login } from "../auth/authService";
import logo from "../assets/logo4.png";

const Login = ({ isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginForm.email === "" || loginForm.password === "") {
      console.log("form error");
    } else {
      const checkLogin = await login(loginForm);
      console.log("Login handleSubmit checkLogin", checkLogin);
      if (checkLogin.success && checkLogin.token) {
        sessionStorage.setItem("token", checkLogin.token);
        sessionStorage.setItem("loggedInUser", JSON.stringify(checkLogin.user));
        setIsLoggedIn(true);
        navigate("/dashboard");
      }
    }
  };

  useEffect(() => {
    console.log("Is logged in:", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
   const token = sessionStorage.getItem("token")
   if (token) {
    navigate("/dashboard")
   }
  }, [])
  

  return (
    <>
      <div className="login bg-stone-100 mt-22 flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
        <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
          <div>
            <img src={logo} alt="Logo" className="h-50" />
          </div>

          <h1 className="mt-5 text-5xl font-bold text-[#4B5563] text-[#4B5563] my-auto">
            <span className="text-[#db2777]">C</span>
            <span className="text-[#f59e0b]">h</span>
            <span className="text-[#22c55e]">a</span>
            <span className="text-[#0e7490]">t</span>
            <span className="text-[#f97316]">S</span>
            <span className="text-[#4ade80]">p</span>
            <span className="text-[#fb923c]">h</span>
            <span className="text-[#ea580c]">e</span>
            <span className="text-[#06b6d4]">r</span>
            <span className="text-[#4c1d95]">e</span>
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Email
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                type="email"
                name="email"
                id="email"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="name@company.com"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                autoComplete="new-password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-teal-500/50"
          >
            Login
          </button>
          <div className="text-sm font-light text-[#6B7280] ">
            Don't have an accout yet?{" "}
            <a href="#" className="font-medium text-[#4F46E5] hover:underline">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
