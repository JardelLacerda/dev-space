import Styled from "styled-components";

export const ContainerForm = Styled.form`
    background-color: ${({ theme }) => theme.PrimaryTheme};
    width: 80%;
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
