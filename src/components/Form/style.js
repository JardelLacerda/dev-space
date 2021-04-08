import Styled from "styled-components";
import Colors from "../../global/Colors";

export const ContainerForm = Styled.form`
    background-color: ${Colors.BasicGrayBlack};
    width: 80%;
    max-width: 300px;
    border: solid 1px ${Colors.BasicYellow};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

`;

export const IconForm = Styled.img`
    width: ${(props) => props.width};
    margin-bottom: 20px;
`;
