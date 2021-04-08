/*
Documentação para uso do Formulario

Valores de entradas de props:
?-----------------------------
instructions - Formato de Objeto
    
!Valores de entradas do instructions:
icone - Formato de Obejto contendo as chaves "icone" e "width"
chave icone - entrada do arquivo de imagem já importado 
    exemplo - icone: {Space}
chave width - entrada do tamanho da imagem em formato de string
    exemplo - width: "200px"
to use - icone: { icone: Astronaut, width: "200px" }

?-----------------------------
inputList - Formato de Array de arrays contendo os name, placeholder respectivamente

to use - inputList: [
            ["name", "email"],
            ["name2", "senha"],
          ],
          
?--------------------------------
buttonName - Formato String contendo o nome do butão

to use - buttonName: "Logar",

?--------------------------------
formAction - Formato Função contendo a função que passara pelo formulario

to use - formAction: {handleSubmit}

?--------------------------------
to use global - 
        instructions={{
            buttonName: "Logar"
            icone: { icone: Astronaut, width: "200px" },
            inputList: [
                ["email", "email"],
                ["password", "senha"],
            ],
            formAction: {() => handleSubmit(handleForm)}
        }}

*/

import { TextField } from "@material-ui/core";
import { ContainerForm, IconForm } from "./style";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Buttons";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    marginTop: 0,
    backgroundColor: "#fff",
    borderRadius: "4px",
  },
}));

const Form = ({ instructions }) => {
  const { icone, inputList, buttonName, formAction } = instructions;
  const classes = useStyles();
  return (
    <ContainerForm className={classes.container} onSubmit={formAction}>
      <IconForm src={icone.icone} width={icone.width} />
      {inputList.map((input) => {
        return (
          <TextField
            id={input[0]}
            label={input[1]}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        );
      })}
      <Button nameBtn={buttonName} />
    </ContainerForm>
  );
};

export default Form;
