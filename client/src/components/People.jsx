import {useState, useEffect} from "react"

const People = ({ usersList }) => {

  useEffect(() => {
    console.log("usersList", usersList)
  }, [])

  return (
    <>
      <div className="m-5 shadow w-full rounded bg-white">
        <h1 className="text-xl p-7">People</h1>
        <ul role="list" className="pl-7 pr-7 pb-7 divide-y divide-gray-100  overflow-y-auto h-73">
        {usersList.map((user, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="size-12 flex-none rounded-full bg-gray-50"
                src={`${user.avatar}`}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {user.username}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">Prompt!</p>
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
          {/* <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="size-12 flex-none rounded-full bg-gray-50"
                src={new URL(`../assets/friend3.JPG`, import.meta.url).href}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Bill Gates
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  Nevermind it'll
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
              </p>
              <div className="mt-1 bg-green-200 rounded-full w-4 h-4 flex pl-1 items-center">
                <p className="text-xs/5 text-gray-900">2</p>
              </div>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="size-12 flex-none rounded-full bg-gray-50"
                src={new URL(`../assets/friend4.JPG`, import.meta.url).href}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Victoria H
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  Okay, brother, let's see...{" "}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs/6 text-gray-500">
                Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
              </p>
              <p className="">
                <svg
                  className="h-3 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
                </svg>
              </p>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="size-12 flex-none rounded-full bg-gray-50"
                src={new URL(`../assets/friend2.JPG`, import.meta.url).href}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Iso Luna
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">Prompt!</p>
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
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="size-12 flex-none rounded-full bg-gray-50"
                src={new URL(`../assets/friend3.JPG`, import.meta.url).href}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Bill Gates
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  Nevermind it'll
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
              </p>
              <div className="mt-1 bg-green-200 rounded-full w-4 h-4 flex pl-1 items-center">
                <p className="text-xs/5 text-gray-900">2</p>
              </div>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="size-12 flex-none rounded-full bg-gray-50"
                src={new URL(`../assets/friend4.JPG`, import.meta.url).href}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Victoria H
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  Okay, brother, let's see...{" "}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs/6 text-gray-500">
                Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
              </p>
              <p className="">
                <svg
                  className="h-3 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
                </svg>
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default People;
