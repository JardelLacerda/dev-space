import { createContext, useState } from "react";

export const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user_id, setId] = useState();

  return (
    <LoginContext.Provider value={{ token, user_id, setToken, setId }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
