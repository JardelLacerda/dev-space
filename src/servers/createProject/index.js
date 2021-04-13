import Form from "../../components/Form";
import StandardModal from "../../components/Modal";
import Astronaut from "../../images/astronaut.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { LoginContext } from "../../providers/login";

import axios from "axios";
import { useHistory } from "react-router";

const RequisitionNewProject = () => {
  const { token, user_id } = useContext(LoginContext);
  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    data["userId"] = user_id;
    data["participants"] = [];
    data["description"] = null;
    data["repository"] = [
      {
        title: null,
        link: null,
      },
    ];
    data["technology"] = [
      {
        title: null,
        link: null,
      },
    ];
    data["accumulated_time"] = 0;
    data["columns"] = {
      column1: {
        id: "column1",
        title: "Backlog",
        taskIds: [],
        userId: [],
      },
      column2: {
        id: "column2",
        title: "To Do",
        taskIds: [],
        userId: [],
      },
      column3: {
        id: "column3",
        title: "Doing",
        taskIds: [],
        userId: [],
      },
      column4: {
        id: "column4",
        title: "Code Review",
        taskIds: [],
        userId: [],
      },
      column5: {
        id: "column5",
        title: "Testing",
        taskIds: [],
        userId: [],
      },
      column6: {
        id: "column6",
        title: "Done",
        taskIds: [],
        userId: [],
      },
    };
    data["columnsOrder"] = [
      "column1",
      "column2",
      "column3",
      "column4",
      "column5",
      "column6",
    ];

    await axios
      .post("https://dev-space-json-server.herokuapp.com/project", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp);
        reset();
        history.push(`/project/${resp.data.id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StandardModal buttonTxtOpen="Novo Projeto">
      <Form
        instructions={{
          buttonName: "Criar",
          icone: { icone: Astronaut, width: "150px" },
          inputList: [["title", "Titulo do projeto"]],
          formAction: handleSubmit(onSubmit),
          register: register,
          errors: errors,
        }}
      />
    </StandardModal>
  );
};

export default RequisitionNewProject;
