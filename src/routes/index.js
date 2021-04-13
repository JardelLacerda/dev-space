import { Switch, Route } from "react-router-dom";
import Page404 from "../pages/error404";

import HomePage from "../pages/homePage";
import LaddingPage from "../pages/laddingPage";
import Project from "../pages/project";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LaddingPage />
      </Route>
      <Route exact path="/home/:id">
        <HomePage />
      </Route>
      <Route exact path="/project/:id">
        <Project />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
};

export default Router;
