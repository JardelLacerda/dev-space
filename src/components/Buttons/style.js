import styled from "styled-components";
import { Avatar, Button } from "@material-ui/core";

import Colors from "../../global/Theme";

export const StyledButton = styled(Button)`
  background: 0.25s ease, color 0.25s ease, box-shadow 0.15s ease;
  box-shadow: 6px 6px 0 #888;

  &:hover {
    color: white;
    box-shadow: 5px 5px 0 ${Colors.BasicYellow};
  }

  &&& {
    background-color: rgba(0, 0, 0, 0.6);
  }

  & span.MuiButton-label {
    padding: 0.4em;
    width: 110px;
    height: 30px;
    color: ${Colors.BasicYellow};

    font-weight: bold;
    font-size: 13px;
    cursor: pointer;

    @media (min-width: 700px) {
      height: ${(props) => (props.landing ? "50px" : "30px")};
      width: ${(props) => (props.landing ? "140px" : "180px")};

      font-size: 18px;
    }
  }
  & .MuiTouchRipple-root {
    border: 2px solid ${Colors.BasicYellow};
  }
`;

export const AvatarStyled = styled(Avatar)`
  cursor: pointer;
  && {
    width: 26px;
    height: 26px;
  }
  :hover {
    background-color: ${Colors.BasicGrayBlack};
  }
`;
