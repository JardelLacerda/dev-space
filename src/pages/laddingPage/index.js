import StandardModal from "../../components/Modal";
import {
  Container,
  ContainerButtons,
  ContainerInfo,
  ContainerMain,
  Description,
  SubTitle,
  Title,
} from "./styled";

import { useContext } from "react";
import { ThemeContext } from "../../providers/theme";
import { LoginContext } from "../../providers/login";
import RequisitionLogin from "../../servers/login";

const LaddingPage = () => {
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);
  const { token, user_id } = useContext(LoginContext);

  console.log(token);
  console.log(user_id);
  return (
    <Container theme={theme ? ThemeDark : ThemeLigth}>
      <ContainerMain theme={theme ? ThemeDark : ThemeLigth}>
        <ContainerInfo>
          <Title theme={theme ? ThemeDark : ThemeLigth}>DevSpace</Title>
          <SubTitle theme={theme ? ThemeDark : ThemeLigth}>
            Seu espaço de desenvolvimento
          </SubTitle>

          <Description theme={theme ? ThemeDark : ThemeLigth}>
            Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna
            nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
            Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
            Aenean sit amet nisi. Suco de cevadiss deixa as pessoas mais
            interessantis. Sapien in monti palavris qui num significa nadis i
            pareci latim.
          </Description>
          <ContainerButtons>
            <StandardModal buttonTxtOpen="Register"></StandardModal>
            <RequisitionLogin />
          </ContainerButtons>
        </ContainerInfo>
      </ContainerMain>
    </Container>
  );
};

export default LaddingPage;
