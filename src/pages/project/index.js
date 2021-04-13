import Board from "../../components/Board";
import { Container } from "./style";
import NavBarProjects from "../../components/NavBarProjects";
import Header from "../../components/Header";

const Project = () => {
  return (
    <>
      <Header />
      <NavBarProjects />
      <Container>
        <Board />
      </Container>
    </>
  );
};

export default Project;
