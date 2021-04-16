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
import { storage } from "../../servers/firebase";

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
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userHardSkill, setUserHardSkills] = useState("Java");
  console.log(storage);
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
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
        console.log(url);
      }
    );
  };
  useEffect(() => {
    if (url) {
      let data = {};
      data.image = url;
      profileEdit(user_id, data);
      setInterval(function () {
        setLoad(!load);
      }, 2000);
    }
  }, [url]);
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
            {userInfos.image && <img src={userInfos.image} alt="User Img" />}
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
            {userInfos.image && <img src={userInfos.image} alt="User Img" />}
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
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
