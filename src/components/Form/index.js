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

import { ContainerForm, IconForm, Input, Button, ErrorMessage } from "./style";

import { useContext } from "react";
import { ThemeContext } from "../../providers/theme";

const Form = ({ instructions }) => {
  const { theme, ThemeDarkForm, ThemeLigth } = useContext(ThemeContext);

  const {
    icone,
    inputList,
    buttonName,
    formAction,
    register,
    errors,
  } = instructions;

  return (
    <ContainerForm
      theme={theme ? ThemeDarkForm : ThemeLigth}
      onSubmit={formAction}
    >
      <IconForm src={icone.icone} width={icone.width} />
      {inputList.map((input, index) => {
        return (
          <>
            <Input
              error
              key={index}
              name={input[0]}
              placeholder={input[1]}
              {...register(input[0])}
            />
            {errors && <ErrorMessage>{errors[input[0]]?.message}</ErrorMessage>}
          </>
        );
      })}

      <Button>{buttonName}</Button>
    </ContainerForm>
  );
};

export default Form;
