import styled from "styled-components";

export const Form = styled.form`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border: solid 3px #c4c4c4;
  background-color: white;
`;

export const InputForm = styled.input`
  outline: none;
  width: 80%;
  height: 40px;
  border: solid 2px #c4c4c4;
`;

export const ButtonForm = styled.button`
  width: 100px;
  border: solid 2px #c4c4c4;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  outline: none;
`;
