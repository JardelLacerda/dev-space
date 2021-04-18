import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Exemplo de uso:
// 1: Importar o toastify import { showToast } from "../../toastify";
// 2: Criar uma função para passar os valores:
// 2.1: O "type" é basicamente os 4 tipos, que representam 4 cores diferentes
// 2.2: A "message" é a mensagem que irá aparecer
// 3: Executar o toastify() em alguma parte
// const toastify = () => showToast({ type: "error", message: "Dados errados" });

export const showToast = ({ type, message }) => {
  switch (type) {
    case "create":
      toast.success(message);
      break;
    case "delete":
      toast.error(message);
      break;
    case "send":
      toast.info(message);
      break;
    default:
      toast.info(message);
  }
};

export const ToastAnimated = () => {
  return <ToastContainer autoClose={4000} />;
};
