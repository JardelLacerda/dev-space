import StandardModal from "../Modal";

import { useContext } from "react";
import { useParams } from "react-router";
import { ProjectTaks } from "../../providers/project-tasks";
import { ThemeContext } from "../../providers/theme";
import { LoginContext } from "../../providers/login";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AddIcon from "@material-ui/icons/Add";

import axios from "axios";

const CreateTecnology = () => {
  const { id } = useParams();
  const { token } = useContext(LoginContext);
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);
  const { usedProject, setUsedProject, getUsedProject } = useContext(
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="title" {...register("title")} placeholder="Titulo" />
        {errors && errors["title"]?.message}
        <input
          name="link"
          {...register("link")}
          placeholder="Link (Opcional)"
        />
        {errors && errors["link"]?.message}

        <button>Criar</button>
      </form>
    </StandardModal>
  );
};

export default CreateTecnology;
