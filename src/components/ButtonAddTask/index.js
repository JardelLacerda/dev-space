import { Container } from "./style";
import { AddCircleOutline } from "@material-ui/icons";
import { IconButton, Tooltip } from "@material-ui/core";

const ButtonAddTask = () => {
  return (
    <Container>
      <Tooltip title="Adicionar Tarefa">
        <IconButton>
          <AddCircleOutline />
        </IconButton>
      </Tooltip>
    </Container>
  );
};

export default ButtonAddTask;
