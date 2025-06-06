import React from 'react'

const OnlineUsers = ({ welcomeJoined, users }) => {
  return (
    <>
    <div className="mt-5 mb-5 bg-white rounded shadow">
          <h1 className="text-xl p-7">Users</h1>
          <ul className="users mt-5 pl-7 pr-7 font-bold bg-white h-96 overflow-y-auto">
            {users.map((user, index) => (
              <li key={index} className="flex mb-2">
                <div className="flex items-center mr-2">
                  {user.avatar ? <img
                    className="size-12 flex-none rounded-full bg-gray-50"
                    src={`${user.avatar}`}
                    alt=""
                  /> : ''}
                  
                </div>
                <div className="flex items-center">{user.username}</div>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}

export default OnlineUsers