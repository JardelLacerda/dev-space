import { useState } from "react";

import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { DivStyled, AppBarStyled, ToolbarStyled, DrawerStyled } from "./style";

import {
  AccountCircle,
  ExitToApp,
  Home,
  Menu,
  GetApp,
} from "@material-ui/icons";

import Brightness4Icon from "@material-ui/icons/Brightness4";

import { useContext } from "react";
import { ThemeContext } from "../../providers/theme";
import { useHistory, useParams } from "react-router-dom";
import { LoginContext } from "../../providers/login";

const Header = () => {
  const { theme, toggleTheme, ThemeDark, ThemeLigth } = useContext(
    ThemeContext
  );
  const { user_id } = useContext(LoginContext);

  const [state, setState] = useState({
    right: false,
  });

  const history = useHistory();
  const { id } = useParams();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={toggleTheme}>
          <ListItemIcon>
            <Brightness4Icon onClick={toggleTheme} />
          </ListItemIcon>

          <ListItemText primary="Theme Mode" />
        </ListItem>

        <ListItem button onClick={() => history.push("/profile")}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>

          <ListItemText primary="Perfil" />
        </ListItem>

        <ListItem button onClick={() => history.push(`/home/${user_id}`)}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>

          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button onClick={() => history.push("/about")}>
          <ListItemIcon>
            <GetApp />
          </ListItemIcon>

          <ListItemText primary="Login" />
        </ListItem>

        <ListItem button onClick={() => Logout()}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>

          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </div>
  );

  const Logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <DivStyled>
      <AppBarStyled position="static" theme={theme ? ThemeDark : ThemeLigth}>
        <ToolbarStyled theme={theme ? ThemeDark : ThemeLigth}>
          <div>Logo</div>
          {["right"].map((anchor) => (
            <div className="tempMobile" key={anchor}>
              <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
                <Menu />
              </Button>
              <DrawerStyled
                theme={theme ? ThemeDark : ThemeLigth}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </DrawerStyled>
            </div>
          ))}
          <div className="tempDesktop">
            <Button color="inherit" onClick={toggleTheme}>
              Theme Mode
            </Button>
            <Button color="inherit" onClick={() => history.push(`/home/${id}`)}>
              Home
            </Button>
            <Button color="inherit" onClick={() => history.push("/profile")}>
              Perfil
            </Button>
            <Button color="inherit" onClick={() => history.push("/about")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => Logout()}>
              Sair
            </Button>
          </div>
        </ToolbarStyled>
      </AppBarStyled>
    </DivStyled>
  );
};
export default Header;
