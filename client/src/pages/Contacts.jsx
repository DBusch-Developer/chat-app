import { useEffect } from "react";

const Contacts = ({ usersList }) => {
  useEffect(() => {
    console.log("usersList", usersList);
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-10">
      {usersList.map((user, index) => (
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={`${user.avatar}`}
            alt=""
          />
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
        {/* <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend3.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend4.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend5.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend6.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend7.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend8.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend9.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend10.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend11.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend12.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend13.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend14.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend15.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend16.JPG`, import.meta.url).href}
            alt=""
          />
        </div>
        <div className="m-5 p-5 rounded bg-white shadow">
          <img
            className="size-24 flex-none rounded-full bg-gray-50"
            src={new URL(`../assets/friend17.JPG`, import.meta.url).href}
            alt=""
          />
        </div> */}
      </div>
    </>
  );
};

export default Contacts;
