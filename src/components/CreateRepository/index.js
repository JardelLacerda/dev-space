import StandardModal from "../Modal";

import { useContext } from "react";
import { useParams } from "react-router";
import { ProjectTaks } from "../../providers/project-tasks";
import { ThemeContext } from "../../providers/theme";
import { LoginContext } from "../../providers/login";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import AddIcon from "@material-ui/icons/Add";
import { ButtonForm, Form, InputForm } from "./styled";

const CreateRepository = () => {
  const { id } = useParams();
  const { token } = useContext(LoginContext);
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);
  const { usedProject, getUsedProject } = useContext(ProjectTaks);

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

  const onSubmit = async (rep) => {
    let data = { repository: [...usedProject.repository, rep] };

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

export default CreateRepository;
