import StandardModal from "../Modal";

import { useContext } from "react";
import { useParams } from "react-router";
import { ProjectTaks } from "../../providers/project-tasks";
import { LoginContext } from "../../providers/login";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import EditIcon from "@material-ui/icons/Edit";

import { ButtonForm, Form, InputForm } from "./styled";

const CreateDescriptionTech = () => {
  const { id } = useParams();
  const { token } = useContext(LoginContext);
  const { usedProject, getUsedProject } = useContext(ProjectTaks);

  const schema = yup.object().shape({
    description: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (rep) => {
    let data = { description: rep.description };

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
    <StandardModal isIcon={true} icon={<EditIcon />}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="description"
          {...register("description")}
          placeholder="Descrição"
        />
        {errors && errors["description"]?.message}

        <ButtonForm>Criar</ButtonForm>
      </Form>
    </StandardModal>
  );
};

export default CreateDescriptionTech;
