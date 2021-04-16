import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProjectTaks } from "../../providers/project-tasks";
import { ThemeContext } from "../../providers/theme";
import { LoginContext } from "../../providers/login";
import {
  ButtonsCard,
  CardPadrao,
  Container,
  ContentCard,
  IconLink,
  LocationCardsInfo,
  MainContainer,
  MiniCardTec,
  RemoveItem,
  SubTitle,
  Title,
} from "./styled";

import BackspaceIcon from "@material-ui/icons/Backspace";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import CreateIcon from "@material-ui/icons/Create";

import IconGitlab from "../../images/icons/gitLab.png";
import IconGitHub from "../../images/icons/gitHub.png";
import IconFigma from "../../images/icons/figma.png";
import axios from "axios";
import CreateTecnology from "../CreateTecnology";
import CreateRepository from "../CreateRepository";

const Information = () => {
  const { id } = useParams();
  const [loadedInfos, setLoadedInfos] = useState(true);
  const [delTec, setDelTec] = useState(false);
  const [delRep, setDelRep] = useState(false);
  const { token } = useContext(LoginContext);
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);

  const { getUsedProject, usedProject } = useContext(ProjectTaks);

  const {
    description,
    repository,
    technology,
    title,
    accumulated_time,
  } = usedProject;

  const ColorRandon = () => {
    const CorlorsCard = [
      "#191308",
      "#454B66",
      "#9CA3DB",
      "#9883E5",
      "#50C9CE",
      "#FCD3DE",
      "#2176FF",
      "#F79824",
      "#3D0814",
      "#006C67",
    ];

    return CorlorsCard[Math.floor(Math.random() * 10)];
  };

  const DeleteTecnology = async (tec) => {
    let data = usedProject.technology;
    data = {
      technology: data.filter((resp) => {
        return resp.title !== tec.title;
      }),
    };

    await axios
      .patch(
        `https://dev-space-json-server.herokuapp.com/project/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        getUsedProject(id);
      })
      .catch((err) => console.log(err));
  };

  const DeleteRepository = async (rep) => {
    let data = usedProject.repository;
    data = {
      repository: data.filter((resp) => {
        return resp.title !== rep.title;
      }),
    };

    await axios
      .patch(
        `https://dev-space-json-server.herokuapp.com/project/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        getUsedProject(id);
      })
      .catch((err) => console.log(err));
  };

  const loadedProject = async () => {
    await getUsedProject(id);
    setLoadedInfos(false);
  };

  useEffect(() => {
    loadedProject();
  }, []);

  return loadedInfos ? (
    <p>Carregando suas informaçoes</p>
  ) : (
    <Container theme={theme ? ThemeDark : ThemeLigth}>
      <MainContainer>
        <Title theme={theme ? ThemeDark : ThemeLigth}>{title}</Title>
        <SubTitle theme={theme ? ThemeDark : ThemeLigth}>
          Tempo total do projeto: {accumulated_time}
        </SubTitle>

        <LocationCardsInfo>
          <CardPadrao theme={theme ? ThemeDark : ThemeLigth}>
            <h2>
              <span>?</span>Descrição<span>?</span>
            </h2>
            <ContentCard>
              <p>{description}</p>
            </ContentCard>
            <ButtonsCard>
              <CreateIcon style={{ cursor: "pointer" }} />
            </ButtonsCard>
          </CardPadrao>

          <CardPadrao theme={theme ? ThemeDark : ThemeLigth}>
            <h2>
              <span>{`{`}</span>Tecnologias<span>{`}`}</span>
            </h2>
            <ContentCard>
              {technology.map((tec, index) => {
                return (
                  <MiniCardTec key={index} coloration={ColorRandon()}>
                    <h4>{tec.title}</h4>
                    {delTec && (
                      <RemoveItem>
                        <HighlightOffIcon
                          onClick={() => DeleteTecnology(tec)}
                        />
                      </RemoveItem>
                    )}
                  </MiniCardTec>
                );
              })}
            </ContentCard>
            <ButtonsCard>
              <CreateTecnology />

              {!delTec ? (
                <BackspaceIcon
                  onClick={() => setDelTec(!delTec)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <MenuBookIcon
                  onClick={() => setDelTec(!delTec)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </ButtonsCard>
          </CardPadrao>

          <CardPadrao theme={theme ? ThemeDark : ThemeLigth}>
            <h2>
              <span>-</span>Links Uteis<span>-</span>
            </h2>
            <ContentCard>
              {repository.map((rep, index) => {
                return (
                  <a className="Icons" key={index}>
                    {delRep && (
                      <RemoveItem>
                        <HighlightOffIcon
                          onClick={() => DeleteRepository(rep)}
                        />
                      </RemoveItem>
                    )}
                    {rep.title === "Gitlab" ? (
                      <IconLink src={IconGitlab} />
                    ) : rep.title === "GitHub" ? (
                      <IconLink src={IconGitHub} />
                    ) : rep.title === "Figma" ? (
                      <IconLink src={IconFigma} />
                    ) : (
                      <p>{rep.title}</p>
                    )}
                  </a>
                );
              })}
            </ContentCard>
            <ButtonsCard>
              <CreateRepository />

              {!delRep ? (
                <BackspaceIcon
                  onClick={() => setDelRep(!delRep)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <MenuBookIcon
                  onClick={() => setDelRep(!delRep)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </ButtonsCard>
          </CardPadrao>
        </LocationCardsInfo>
      </MainContainer>
    </Container>
  );
};

export default Information;
