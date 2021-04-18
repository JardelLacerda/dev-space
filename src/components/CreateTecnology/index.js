import StandardModal from "../Modal";

import { useContext } from "react";
import { useParams } from "react-router";
import { ProjectTaks } from "../../providers/project-tasks";
import { LoginContext } from "../../providers/login";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AddIcon from "@material-ui/icons/Add";

import axios from "axios";
import { ButtonForm, Form, InputForm } from "../CreateRepository/styled";

const CreateTecnology = () => {
  const { id } = useParams();
  const { token } = useContext(LoginContext);
  const { usedProject, getUsedProject } = useContext(
    ProjectTaks
  );

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatorio"),
    link: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (tec) => {
    let data = { technology: [...usedProject.technology, tec] };

    await axios
      .patch(
        `https://dev-space-json-server.herokuapp.com/project/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        reset();
        getUsedProject(id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StandardModal isIcon={true} icon={<AddIcon />}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputForm name="title" {...register("title")} placeholder="Titulo" />
        {errors && errors["title"]?.message}
        <InputForm
          name="link"
          {...register("link")}
          placeholder="Link (Opcional)"
        />
        {errors && errors["link"]?.message}

        <ButtonForm>Criar</ButtonForm>
      </Form>
    </StandardModal>
  );
};

export default CreateTecnology;
