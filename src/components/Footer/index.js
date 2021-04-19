import { CardFooter, FooterStyled, LinkStyled, SubTitle, Title } from "./style";

const LinkKenzie = "https://kenzie.com.br/";

const Footer = () => {
  return (
    <FooterStyled>
      <CardFooter>
        <Title>DevSpace, O espaço favorito do dev®</Title>
      </CardFooter>
      <CardFooter>
        <SubTitle>DEVELOPERS</SubTitle>

        <SubTitle>
          Matheus Dantas, <br /> Jardel Lacerda,
          <br /> Matheus Henrique Costa,
          <br /> Augusto Peçanha.
        </SubTitle>
      </CardFooter>
      <CardFooter>
        <SubTitle>BRASIL</SubTitle>

        <SubTitle>
          <u>brasil@devspace.com.br</u> {""}
          +55 11 9999 9999 Lorem Ipsum 1458 1º andar, São Paulo
        </SubTitle>
      </CardFooter>
      <CardFooter>
        <SubTitle>
          QUER SABER ONDE APRENDEMOS A PROGRAMAR?{" "}
          <LinkStyled href={LinkKenzie}>
            CONHEÇA A KENZIE ACADEMY &rarr;
          </LinkStyled>
        </SubTitle>
      </CardFooter>
    </FooterStyled>
  );
};
export default Footer;
