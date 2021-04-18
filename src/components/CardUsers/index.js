/*

* <AvatarStyled/>  e <CardUser/>
    - Recebe props medium e large para alterar tamanho
Sem essas props o padrão é small
    - Recebe por props a imagem
* <Name />
    - Recebe por props o nome por children
 */

import { AvatarStyled, CardUser, Name } from "./style";

const CardUsers = ({ srcImg, children }) => {
  return (
    <CardUser>
      <AvatarStyled src={srcImg} />
      <Name>{children}</Name>
    </CardUser>
  );
};

export default CardUsers;
