import React, { createContext, useState } from "react";

export const USER_CONTEXT = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <USER_CONTEXT.Provider value={{ user, setUser }}>
      {children}
    </USER_CONTEXT.Provider>
  );
};

export default UserProvider;
