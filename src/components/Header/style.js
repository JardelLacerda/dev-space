import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";

export const DivStyled = styled.div`
  width: auto;
`;

export const AppBarStyled = styled(AppBar)`
  && {
    border-bottom: 1px solid ${({ theme }) => theme.Details};
    background-color: ${({ theme }) => theme.PrimaryTheme};
  }
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.Details};

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
    background-color: ${({ theme }) => theme.Details};
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
