import ThemeProvider from "./theme";
import LoginContext from "./login";
import ProjectTasksProvider from "./project-tasks";
const Providers = ({ children }) => {
  return (
    <LoginContext>
      <ThemeProvider>
        <ProjectTasksProvider>{children}</ProjectTasksProvider>
      </ThemeProvider>
    </LoginContext>
  );
};

export default Providers;
