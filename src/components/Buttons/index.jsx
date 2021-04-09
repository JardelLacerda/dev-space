/*
Existe uma prop chamada "landing" feita por styled components 
Quando ela é colocada no botão fica com as dimensões adequadas na landing page
Quando retirada, as dimensões ficam adequadas às outras páginas
*/

import { StyledButton } from "./style";

const Button = ({ nameBtn, onClick = null }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{nameBtn}</StyledButton>
    </>
  );
};

export default Button;
