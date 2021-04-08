import { StyledButton } from "./style";

const Button = ({ onClick = null, nameBtn }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{nameBtn}</StyledButton>
    </>
  );
};

export default Button;
