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
  Description,
  Menu,
} from "@material-ui/icons";

const Header = () => {
  const [state, setState] = useState({
    right: false,
  });

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
        {["Profile", "Sair", "Home", "About"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === "Profile" ? (
                <AccountCircle />
              ) : text === "Sair" ? (
                <ExitToApp />
              ) : text === "Home" ? (
                <Home />
              ) : text === "About" ? (
                <Description />
              ) : null}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <DivStyled>
      <AppBarStyled position="static">
        <ToolbarStyled>
          <div>Logo</div>
          {["right"].map((anchor) => (
            <div className="tempMobile" key={anchor}>
              <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
                <Menu />
              </Button>
              <DrawerStyled
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </DrawerStyled>
            </div>
          ))}
          <div className="tempDesktop">
            <Button color="inherit">Profile</Button>
            <Button color="inherit">Sair</Button>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
          </div>
        </ToolbarStyled>
      </AppBarStyled>
    </DivStyled>
  );
};
export default Header;
