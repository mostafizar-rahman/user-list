import React, { createContext, useEffect, useState } from "react";
import UserList from "../Utlit/UserList.json";

export const USER_CONTEXT = createContext(null);

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(UserList);
  }, []);


  return (
    <USER_CONTEXT.Provider value={{users, userId, setUserId }}>
      {children}
    </USER_CONTEXT.Provider>
  );
};

export default UserProvider;
