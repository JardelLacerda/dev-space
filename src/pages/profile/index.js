import Header from "../../components/Header";
import { LoginContext } from "../../providers/login";
import { useContext, useEffect, useState } from "react";
import {
  Info,
  EditInfo,
  Container,
  ProfileImage,
  PersonalInfo,
  PersonalInfoEdit,
  ApiText,
  Config,
  UserInfo,
  Div,
} from "./style";
import { ThemeContext } from "../../providers/theme";

import { ProjectTaks } from "../../providers/project-tasks";

const Profile = () => {
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);

  const { token, user_id, isLogged } = useContext(LoginContext);

  const {
    usedProject,
    tasksProject,
    getTasksProject,
    getUsedProject,
    setUsedProject,
    actulyProject,
    profileInfo,
    profileEdit,
    userInfos,
  } = useContext(ProjectTaks);
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userHardSkill, setUserHardSkills] = useState("Java");
  const [load, setLoad] = useState(false);
  const handleSubmit = (infoChange) => {
    let data = {};
    if (userName === infoChange) {
      data.name = infoChange;
    } else if (userBio === infoChange) {
      data.bio = infoChange;
    } else if (userHardSkill === infoChange) {
      data.hard_skills = [...userInfos.hard_skills, infoChange];
    }
    profileEdit(user_id, data);
    setLoad(!load);
    console.log(data);
  };
  useEffect(() => {
    console.log("Ola");
    if (user_id !== undefined) {
      profileInfo(user_id);
      console.log(userInfos);

      setUserBio(userInfos.bio);
    }
  }, [user_id]);

  useEffect(() => {
    setUserName(userInfos.name);
    setUserBio(userInfos.bio);
  }, [userInfos.name]);

  useEffect(() => {
    profileInfo(user_id);
  }, [load]);
  return (
    <>
      <Header />
      <Container theme={theme ? ThemeDark : ThemeLigth}>
        <Info>
          <Config theme={theme ? ThemeDark : ThemeLigth}>
            Informações do Usuário
          </Config>
          <UserInfo theme={theme ? ThemeDark : ThemeLigth}>
            <img src={userInfos.image} alt="User Img" />
            <div>
              <span>Nome </span>
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfos.name}
              </ApiText>
            </div>
            <div>
              <span>E-mail </span>
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfos.email}
              </ApiText>
            </div>
            <div>
              <span>Bio </span>
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfos.bio}
              </ApiText>
            </div>
            <div>
              <span>Hard Skills</span>
              {userInfos?.hard_skills?.map((value, index) => (
                <span key={index}>
                  <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                    {value}
                  </ApiText>
                </span>
              ))}
            </div>
          </UserInfo>
        </Info>
        <EditInfo>
          <Config theme={theme ? ThemeDark : ThemeLigth}>
            Imagem do Perfil
          </Config>
          <ProfileImage theme={theme ? ThemeDark : ThemeLigth}>
            <img src={userInfos.image} alt="User Img" />
            <button>Add Imagem de Perfil</button>
          </ProfileImage>
          <Config theme={theme ? ThemeDark : ThemeLigth}>
            Configurações do Perfil
          </Config>
          <PersonalInfo theme={theme ? ThemeDark : ThemeLigth}>
            <Div>
              Nome
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfos.name !== undefined ? (
                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                ) : (
                  <input value={""} />
                )}
                <button onClick={() => handleSubmit(userName)}>Vai dar</button>
              </ApiText>
            </Div>
            <Div>
              Bio
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfos.name !== undefined ? (
                  <input
                    style={{ height: "50px" }}
                    value={userBio}
                    onChange={(e) => setUserBio(e.target.value)}
                  />
                ) : (
                  <input value={""} />
                )}
                <button onClick={() => handleSubmit(userBio)}>Vai dar</button>
              </ApiText>
            </Div>
            <Div>
              Hard Skills
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                <input
                  value={userHardSkill}
                  onChange={(e) => setUserHardSkills(e.target.value)}
                />
                <button onClick={() => handleSubmit(userHardSkill)}>
                  Vai dar
                </button>
              </ApiText>
            </Div>
          </PersonalInfo>
        </EditInfo>
      </Container>
    </>
  );
};

export default Profile;
