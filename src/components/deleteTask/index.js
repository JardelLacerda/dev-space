import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../providers/login";

const DelTask = ({ taskId }) => {
  const { token } = useContext(LoginContext);
  const handleClick = () => {
    axios
      .delete(`https://dev-space-json-server.herokuapp.com/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        //let data = usedProject
        //data.columns
      })

      .catch((err) => console.log(err));
  };
  return <button onClick={() => handleClick()}>x</button>;
};

export default DelTask;
