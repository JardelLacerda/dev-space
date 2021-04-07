import styled from "styled-components";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Colors from "../../global/Colors";

export const StyledButton = styled(Button)`
  background-color: #6772e5;
  padding: 7px 14px;

  &:hover {
    background-color: #5469d4;
  }
  & .MuiButton-label {
    padding: 0.5em;
    width: 120px;
    height: 30px;
    color: ${Colors.BasicYellow};

    @media (min-width: 700px) {
      font-size: 25px;
    }
  }
  & .MuiTouchRipple-root {
    border: 2px solid ${Colors.BasicYellow};
  }
`;
