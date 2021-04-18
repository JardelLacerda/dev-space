import Board from "../../components/Board";
import { Container } from "./style";
import NavBarProjects from "../../components/NavBarProjects";
import Header from "../../components/Header";
import { useState } from "react";
import Information from "../../components/Information";
import { ToastAnimated } from "../../components/Toastify";

const Project = () => {
  const [onBoard, setOnBoard] = useState(true);
  return (
    <>
      <ToastAnimated />
      <Header />
      <NavBarProjects setOnBoard={setOnBoard} />
      <Container>{onBoard ? <Board /> : <Information />}</Container>
    </>
  );
};

export default Project;
