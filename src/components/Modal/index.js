/*
  * <Button/>:
    - props usadas: nameBtn, icon, onClick, isIcon
    - quando recebe a props isIcon={true} ele vira um icone, do contrário
    ele vira um Botão
    Exemplo:
      icon={<IconeEscolhido/>}
*/
import { makeStyles } from "@material-ui/core/styles";
import { Fade, Modal, Backdrop } from "@material-ui/core";
import { useState } from "react";
import Button from "../Buttons";
import { Paper } from "./style";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const StandardModal = ({ buttonTxtOpen, children, icon, isIcon }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        icon={icon}
        nameBtn={buttonTxtOpen}
        isIcon={isIcon}
        onClick={handleOpen}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper>
            {children}
            {/* <Button nameBtn="Close" onClick={handleClose} /> */}
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};
export default StandardModal;
