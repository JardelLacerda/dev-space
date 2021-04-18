import { Container, DivAvatar } from "./style";
import ListAvatar from "../ListAvatar";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { ProjectTaks } from "../../providers/project-tasks";

function NavBarProjects({ setOnBoard }) {
  const { usedProject } = useContext(ProjectTaks);
  const { title } = usedProject;
  let participants = ["User1", "User1", "User1", "User1"];

  return (
    <Container>
      <nav>
        <h2>{title}</h2>

        <div className="menu">
          <Button onClick={() => setOnBoard(true)}>Projeto</Button>
          <Button onClick={() => setOnBoard(false)}>Informações</Button>
          <Button>Dashboard</Button>
        </div>
        <DivAvatar>
          <ListAvatar participants={participants} />
        </DivAvatar>
      </nav>
    </Container>
  );
}

export default NavBarProjects;
