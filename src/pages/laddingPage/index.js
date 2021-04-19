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
import RequisitionLogin from "../../servers/login";
import RequisitionRegister from "../../servers/register";

import { ToastAnimated } from "../../components/Toastify";

const LaddingPage = () => {
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);

  return (
    <>
      <ToastAnimated />
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
              <RequisitionRegister />
              <RequisitionLogin />
            </ContainerButtons>
          </ContainerInfo>
        </ContainerMain>
      </Container>
    </>
  );
};

export default LaddingPage;
