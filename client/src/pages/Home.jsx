import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <section className="bg-gray dark:bg-gray-900 ">
        <div className="grid max-w-screen-xl  px-4 py-8 m-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to <span className="text-[#db2777]">C</span>
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
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              The ultimate chat application designed to bring people together
              and foster meaningful connections. Our innovative platform offers
              a seamless and intuitive user experience, allowing you to
              communicate with friends, family, and colleagues in real-time.
            </p>
            <Link
              to=""
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-orange-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Sign up 
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              Login
            </Link>
          </div>
          <div className="flex justify-center lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="size-96 rounded-full"
              src={new URL(`../assets/logo4.png`, import.meta.url).href}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
