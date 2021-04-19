import styled from "styled-components";
import Colors from "../../global/Theme";

export const Modal = styled.div`
  /* background-color: white; */
`;

export const FormStyled = styled.form`
  background-color: #666666;
  border: 1px solid yellow;
  color: white;
  height: 200px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* width: 200px; */
`;

export const Input = styled.input`
  border-radius: 5px;
  height: 20px;
  font-family: "Roboto Mono", monospace;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Button = styled.button`
  border: 2px solid ${Colors.BasicYellow};
  border-radius: 3px;
  height: 40px;
  width: 120px;

  background: transparent;
  color: ${Colors.BasicYellow};
  font-weight: bold;
  font-size: 17px;

  cursor: pointer;
  outline: transparent;

  &:hover {
    color: ${Colors.BasicGrayBlack};
    background: papayawhip;
  }
`;
