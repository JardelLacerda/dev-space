import { Container } from "./style";
import ListAvatar from "../ListAvatar";
import { Button } from "@material-ui/core";

function NavBarProjects() {
  let participants = ["User1", "User1", "User1", "User1"];
  return (
    <Container>
      <nav>
        <h2>Projeto 1</h2>

        <div className="menu">
          <Button>Projeto</Button>
          <Button>Informações</Button>
          <Button>Dashboard</Button>
        </div>
        <ListAvatar participants={participants} />
      </nav>
    </Container>
  );
}

export default NavBarProjects;
