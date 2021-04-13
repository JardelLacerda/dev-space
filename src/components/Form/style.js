import Styled from "styled-components";
import Colors from "../../global/Theme";

export const ContainerForm = Styled.form`
    background-color: ${({ theme }) => theme.PrimaryTheme};
    width: 90%;
    max-width: 300px;
    border: solid 1px ${({ theme }) => theme.Details};
    display: flex;

    flex-direction: column;
    align-items: center;
    padding: 10px;

`;

export const IconForm = Styled.img`
    width: ${(props) => props.width};
    margin-bottom: 20px;
`;

export const Input = Styled.input`
    padding: 10px;
    width: 90%;
    background-color: papayawhip;
    border: solid;
    border-radius: 5px;

    
    ::placeholder {
    font-size: 14px;
        color:${Colors.BasicGrayBlack};
    }
`;

export const Button = Styled.button`
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
