import { useEffect, useState, useContext } from "react";

import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import {
  DivStyled,
  AppBarStyled,
  ToolbarStyled,
  DrawerStyled,
  Logo,
} from "./style";

import {
  AccountCircle,
  ExitToApp,
  Home,
  Menu,
  GetApp,
} from "@material-ui/icons";

import { ThemeContext } from "../../providers/theme";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../providers/login";
import LogoDevSpace from "../../images/logo3.png";

const Header = () => {
  const { theme, ThemeDark, ThemeLigth } = useContext(
    ThemeContext
  );
  const { user_id, isLogged, liberyToken } = useContext(LoginContext);

  const [state, setState] = useState({
    right: false,
  });

  const history = useHistory();

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
        {isLogged && <ListItem button onClick={() => history.push("/profile")}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>

          <ListItemText primary="Perfil" />
        </ListItem>}
        
        {isLogged && <ListItem button onClick={() => history.push(`/home/${user_id}`)}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>

          <ListItemText primary="Home" />
        </ListItem> }
        
        {!isLogged && <ListItem button onClick={() => history.push("/about")}>
          <ListItemIcon>
            <GetApp />
          </ListItemIcon>

          <ListItemText primary="Login-Register" />
        </ListItem>}
        

        {isLogged && <ListItem button onClick={() => Logout()}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>

          <ListItemText primary="Sair" />
        </ListItem>}
        
      </List>
    </div>
  );

  const Logout = () => {
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    liberyToken()
  }, [])

  return (
    <DivStyled>
      <AppBarStyled position="static" theme={theme ? ThemeDark : ThemeLigth}>
        <ToolbarStyled theme={theme ? ThemeDark : ThemeLigth}>
          <Logo src={LogoDevSpace} alt="logo" />
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
            {isLogged && (
              <Button
                color="inherit"
                onClick={() => history.push(`/home/${user_id}`)}
              >
                Home
              </Button>
            )}
            {isLogged && <Button color="inherit" onClick={() => history.push("/profile")}>
              Perfil
            </Button>}

            {isLogged && <Button color="inherit" onClick={() => Logout()}>
              Sair
            </Button>}
            {!isLogged && <Button color="inherit" onClick={() => history.push("/about")}>
              Login-Register
            </Button> }
            
           
          </div>
        </ToolbarStyled>
      </AppBarStyled>
    </DivStyled>
  );
};
export default Header;
