import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StandardModal from "../Modal";
import DateTimePicker from "react-datetime-picker";
import { useState, useContext } from "react";
import { Modal, FormStyled, Input, Button } from "./styled";

import { ProjectTaks } from "../../providers/project-tasks";
import { useParams } from "react-router";
import { LoginContext } from "../../providers/login";
import axios from "axios";

const CreateCard = ({ idColumn }) => {
  const { id } = useParams();
  const {
    setTasksProject,
    tasksProject,
    getTasksProject,
    getUsedProject,
  } = useContext(ProjectTaks);
  const { token } = useContext(LoginContext);

  const [value, setValue] = useState(new Date());
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
    description: yup
      .string()
      .max(500, "Máximo de 500 digítos")
      .required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleMyForm = async (data) => {
    data["date"] = value;
    data["tags"] = [{ color: null, title: null }];
    data["timer"] = {
      play: false,
      count_time: 0,
      initial_time: "",
    };
    data["participants"] = [];
    data["done"] = false;
    data["project_id"] = Number(id);

    await axios
      .post(`https://dev-space-json-server.herokuapp.com/tasks`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (resp) => {
        setTasksProject([...tasksProject, resp.data]);
        await createTask(resp.data.id);
      })
      .catch((err) => console.log(err));
  };

  const createTask = async (taskId) => {
    await axios
      .get(`https://dev-space-json-server.herokuapp.com/project/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (resp) => {
        let data = resp.data;
        data.columns[idColumn].taskIds = [
          ...resp.data.columns[idColumn].taskIds,
          `${taskId}`,
        ];

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
            getTasksProject(id);
            getUsedProject(id);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  return (
    <StandardModal buttonTxtOpen="+">
      <Modal>
        <FormStyled onSubmit={handleSubmit(handleMyForm)}>
          <div>
            <Input placeholder="Titulo" input {...register("title")} />
            {errors.title?.message}
          </div>
          <label>Data de Conclusão</label>
          <div>
            <DateTimePicker onChange={setValue} value={value} />
          </div>
          <Input placeholder="Descrição" input {...register("description")} />
          {errors.description?.message}
          <div>
            <Button>Create</Button>
          </div>
        </FormStyled>
      </Modal>
    </StandardModal>
  );
};

export default CreateCard;
