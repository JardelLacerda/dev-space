import { StyledButton } from "./style";

const Button = ({ nameBtn, onClick=null}) => {
  return (
    <>
      <StyledButton onClick={onClick}>{nameBtn}</StyledButton>
    </>
  );
};

export default Button;
