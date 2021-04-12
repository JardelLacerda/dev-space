import ThemeProvider from "./theme";
import LoginContext from "./login";
const Providers = ({ children }) => {
  return (
    <LoginContext>
      <ThemeProvider>{children}</ThemeProvider>
    </LoginContext>
  );
};

export default Providers;
