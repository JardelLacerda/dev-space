import { createContext, useState, useEffect } from "react";
import { ThemeDark, ThemeLigth } from "../../global/Theme";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    if (theme) {
      window.localStorage.setItem("dark", false);
    } else {
      window.localStorage.setItem("dark", true);
    }

    setTheme(!theme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("dark");
    localTheme && setTheme(localTheme);
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
