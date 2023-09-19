import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_CONTEXT } from "./ContextAPI/UserProvider";
import UserList from "./Utlit/UserList.json";
import Title from "./Components/Common/Title/Title";
const App = () => {
  const { setUser } = useContext(USER_CONTEXT);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(UserList);
  }, []);

  // ---------- Redrict use profile page and get user information
  const handleUserId = ({ ...userInfo }) => {
    setUser({ ...userInfo });
    navigate("/profile");
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-5">
      <Title title={"Users List"} />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {users?.map((userInfo) => {
          const { id, image, firstName, lastName, email } = userInfo;
          return (
            <div
              key={id}
              className="rounded-md px-5 py-4 shadow-main"
              style={{
                background:
                  "linear-gradient(54deg, rgba(36,121,223,1) 0%, rgba(36,121,223,1) 100px, rgba(255,255,255,1) 100px)",
              }}
            >
              <div className="flex space-x-3">
                <img
                  src={image}
                  alt="profile"
                  className="w-20 h-20 rounded-full object-cover cursor-pointer"
                  onClick={() => handleUserId({ ...userInfo })}
                />
                <div>
                  <h4
                    onClick={() => handleUserId({ ...userInfo })}
                    className="text-xl font-medium cursor-pointer hover:text-primary transition-all"
                  >
                    {firstName} {lastName}
                  </h4>
                  <p className="text-gray-600">{email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
