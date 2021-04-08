import Styled from "styled-components";
import Colors from "../../global/Colors";
import Rocket from "../../images/rocket.png";

export const ContainerMain = Styled.main`
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.BasicBlack};
    display: flex;
    flex-direction: column;
    background-image: url(${Rocket});
    background-repeat: no-repeat;
    background-position: center;

    @media (min-width: 700px){
        background-position: center right 100px;
    }
    @media (min-width: 1000px){
        width: 1000px;
        margin: 0 auto;
        background-position: center right 150px;
    }

`;

export const ContainerInfo = Styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify: center;
    @media (min-width: 700px){
        width: 50%;
    }
`;

export const Title = Styled.h1`
    color: ${Colors.BasicWhite};
    margin: 0;
    font-weight: 800;
`;

export const SubTitle = Styled.h3`
    color: ${Colors.BasicYellow};
    margin: 0 10px;
    font-weight: 300;
    font-style: italic;
`;

export const Description = Styled.p`
    display: none;
    color: ${Colors.BasicWhite};
    @media (min-width: 700px){
        display: block;
        margin: 80px 0 0 0;
    }
`;

export const ContainerButtons = Styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .MuiButtonBase-root{
        margin: 50px 0;
       
    }

    @media (min-width: 700px){
        height: auto;
        flex-direction: row;
        justify-content: flex-start;
        .MuiButtonBase-root{
            margin-right: 50px;
        }
    }
`;
