import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Colors from "../../global/Colors";

export const StyledButton = styled(Button)`
  padding: 7px 14px;

  &:hover {
    background-color: #5469d4;
  }

  & .MuiButton-root {
    color: rgba(0, 0, 0, 0.5);
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
