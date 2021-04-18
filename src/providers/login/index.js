import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user_id, setId] = useState();
  const [isLogged, setIsLogged] = useState(false);

  const Logged = (token) => {
    if (token !== null) {
      return setIsLogged(true);
    }else{
      setIsLogged(false)
    }
  };

  const setVaribles = (id, token) => {
    window.localStorage.setItem("user_id", id);
    setId(id);

    window.localStorage.setItem("token", token);
    setToken(token);
  };

  const liberyToken = () => {
    let user = window.localStorage.getItem("user_id");
    user && setId(user);
    let token = window.localStorage.getItem("token");
    token && setToken(token);
    Logged(token);
  };

  useEffect(() => {
    liberyToken();
  }, []);

  return (
    <LoginContext.Provider
      value={{ token, user_id, isLogged, liberyToken, setVaribles, setIsLogged }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
