/*
Existe uma prop chamada "landing" feita por styled components 
Quando ela é colocada no botão fica com as dimensões adequadas na landing page
Quando retirada, as dimensões ficam adequadas às outras páginas
*/

/*
  * <Button/>:
    - props usadas: nameBtn, icon, onClick, isIcon
    - quando recebe a props isIcon={true} ele vira um icone, do contrário
    ele vira um Botão
    
    Exemplo:
      icon={<IconeEscolhido/>}
*/
import { StyledButton, AvatarStyled } from "./style";

const Button = ({ nameBtn, icon, onClick = null, isIcon = false }) => {
  return (
    <>
      {isIcon ? (
        <AvatarStyled onClick={onClick}>{icon}</AvatarStyled>
      ) : (
        <StyledButton onClick={onClick}>{nameBtn}</StyledButton>
      )}
    </>
  );
};

export default Button;
