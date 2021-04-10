import { createContext, useState, useEffect } from "react";
import { ThemeDark, ThemeLigth } from "../../global/Theme";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    if (theme) {
      window.localStorage.setItem("theme", false);
      setTheme(false);
    } else {
      window.localStorage.setItem("theme", true);
      setTheme(true);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(JSON.parse(localTheme));
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, ThemeDark, ThemeLigth }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
