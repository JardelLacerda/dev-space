import Form from "../../components/Form";
import StandardModal from "../../components/Modal";
import Astronaut from "../../images/astronaut.png";

import { showToast } from "../../components/Toastify";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

const RequisitionRegister = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatorio"),
    email: yup.string().email("Email invalido").required("Campo Obrigatorio"),
    password: yup.string().required("Campo Obrigatorio"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas Diferentes")
      .required("Campo obrigatório!"),
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
    showToast({ type: "delete", message: "Usuário já existe" });

  const onSubmit = (data) => {
    delete data.passwordConfirm;

    data["image"] =
      "https://aspire.rit.edu/sites/default/files/styles/image_large_thumbnail/public/default_images/profile-picture-default.png?itok=g_gy_X5Q";
    data["bio"] = "Description";
    data["hard_skills"] = [];
    data["links"] = [];
    data["darkMode"] = "true";
    axios
      .post("https://dev-space-json-server.herokuapp.com/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toastify();
        reset();
      })
      .catch((err) => {
        toastifyError();
        console.log(err);
      });
  };

  return (
    <StandardModal buttonTxtOpen="Cadastro">
      <Form
        instructions={{
          buttonName: "Cadastrar",
          icone: { icone: Astronaut, width: "150px" },
          inputList: [
            ["name", "digite seu nome"],
            ["email", "digite seu email"],
            ["password", "digite sua senha", "password"],
            ["passwordConfirm", "confirme sua senha", "password"],
          ],
          formAction: handleSubmit(onSubmit),
          register: register,
          errors: errors,
        }}
      />
    </StandardModal>
  );
};

export default RequisitionRegister;
