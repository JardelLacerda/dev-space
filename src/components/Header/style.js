import styled from "styled-components";
import Colors from "../../global/Colors";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";

export const DivStyled = styled.div`
  background-color: white;
  color: red;

  width: auto;
`;

export const AppBarStyled = styled(AppBar)`
  && {
    border-bottom: 1px solid ${Colors.BasicYellow};
    background-color: ${Colors.BasicBlack};
  }
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  color: ${Colors.BasicYellow};

  & div.tempDesktop {
    display: none;
  }

  @media (min-width: 700px) {
    justify-content: space-between;

    & div.tempMobile {
      display: none;
    }

    & div.tempDesktop {
      display: block;
    }
  }
`;

export const DrawerStyled = styled(Drawer)`
  .MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorRight.MuiPaper-elevation16 {
    background-color: #ffd028;
  }
`;
