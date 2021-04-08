import { StyledButton } from "./style";

// name
// event click

const Button = ({ nameBtn, onClick }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{nameBtn}</StyledButton>
    </>
  );
};

export default Button;
