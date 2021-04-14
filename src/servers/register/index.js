import Form from "../../components/Form";
import StandardModal from "../../components/Modal";
import Astronaut from "../../images/astronaut.png";

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

  const onSubmit = (data) => {
    axios
      .post("https://dev-space-json-server.herokuapp.com/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        reset();
      })
      .catch((err) => console.log(err));
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
