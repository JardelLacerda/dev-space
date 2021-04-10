import ThemeProvider from "./theme";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
