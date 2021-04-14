import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StandardModal from "../Modal";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
import Button from "../Buttons";
import { Modal, Descricao } from "./styled";

const CreateCard = () => {
  const [value, onChange] = useState(new Date());
  const schema = yup.object().shape({
    titulo: yup.string().required("Campo obrigatório!"),
    descricao: yup
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
  const handleMyForm = (data) => {
    console.log(data);
  };
  return (
    <StandardModal buttonTxtOpen="+">
      <Modal>
        <form onSubmit={handleSubmit(handleMyForm)}>
          <div>
            <input placeholder="Titulo" input {...register("titulo")} />
            {errors.titulo?.message}
          </div>
          <label>Data de Conclusão</label>
          <div>
            <DateTimePicker onChange={onChange} value={value} />
          </div>
          <Descricao placeholder="Descrição" input {...register("descricao")} />
          {errors.descricao?.message}
          <div>
            <Button nameBtn="Create" type="submit">
              Create
            </Button>
          </div>
        </form>
      </Modal>
    </StandardModal>
  );
};

export default CreateCard;
