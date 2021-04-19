import Form from "../../components/Form";
import StandardModal from "../../components/Modal";
import Astronaut from "../../images/astronaut.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { LoginContext } from "../../providers/login";

import jwt_decode from "jwt-decode";
import axios from "axios";
import { useHistory } from "react-router";

import { showToast } from "../../components/Toastify";

const RequisitionLogin = () => {
  const { setVaribles } = useContext(LoginContext);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo Obrigatorio"),
    password: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toastify = () =>
    showToast({ type: "warn", message: "Usuário criado com sucesso" });

  const toastifyError = () =>
    showToast({ type: "delete", message: "Usuário ou senha incorretos" });

  const onSubmit = async (data) => {
    await axios
      .post("https://dev-space-json-server.herokuapp.com/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        setVaribles(
          jwt_decode(resp.data.accessToken).sub,
          resp.data.accessToken
        );
        reset();
        toastify();
        history.push(`/home/${jwt_decode(resp.data.accessToken).sub}`);
      })
      .catch((err) => {
        toastifyError();
        // console.log(err);
      });
  };

  return (
    <StandardModal buttonTxtOpen="Login">
      <Form
        instructions={{
          buttonName: "Logar",
          icone: { icone: Astronaut, width: "150px" },
          inputList: [
            ["email", "email"],
            ["password", "password", "password"],
          ],
          formAction: handleSubmit(onSubmit),
          register: register,
          errors: errors,
        }}
      />
    </StandardModal>
  );
};

export default RequisitionLogin;
