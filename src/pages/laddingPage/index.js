import Button from "../../components/Buttons";
import {
  ContainerButtons,
  ContainerInfo,
  ContainerMain,
  Description,
  SubTitle,
  Title,
} from "./styled";

const LaddingPage = () => {
  return (
    <ContainerMain>
      <ContainerInfo>
        <Title>DevSpace</Title>
        <SubTitle>Seu espaço de desenvolvimento</SubTitle>

        <Description>
          Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna
          nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Posuere
          libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit
          amet nisi. Suco de cevadiss deixa as pessoas mais interessantis.
          Sapien in monti palavris qui num significa nadis i pareci latim.
        </Description>
        <ContainerButtons>
          <Button nameBtn="Register" />
          <Button nameBtn="Login" />
        </ContainerButtons>
      </ContainerInfo>
    </ContainerMain>
  );
};

export default LaddingPage;
