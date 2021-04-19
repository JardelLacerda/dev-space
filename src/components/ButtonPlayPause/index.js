import { ButtonIcon } from "./style";
import { PlayArrow, Pause } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";

const ButtonPlayPause = ({ play, onClick }) => {
  return (
    <ButtonIcon size="small" onClick={onClick}>
      {play ? (
        <Tooltip title="Pause">
          <Pause />
        </Tooltip>
      ) : (
        <Tooltip title="Play">
          <PlayArrow />
        </Tooltip>
      )}
    </ButtonIcon>
  );
};

export default ButtonPlayPause;
