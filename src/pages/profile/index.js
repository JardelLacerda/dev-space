import Header from "../../components/Header";
import { LoginContext } from "../../providers/login";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
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
} from "./style";
import { ThemeContext } from "../../providers/theme";
import EditButton from "../../components/ButtonEdit";
import { AiFillEdit } from "react-icons/ai";

const Profile = () => {
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);

  const { token, user_id, isLogged } = useContext(LoginContext);
  const [userInfo, setUserInfo] = useState({});
  const ProfileInfo = () => {
    axios
      .get(`https://dev-space-json-server.herokuapp.com/users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp);
        setUserInfo(resp.data);
      });
  };
  useEffect(() => {
    if (user_id !== undefined) {
      ProfileInfo();
    }
  }, [user_id]);
  return (
    <>
      <Header />
      <Container theme={theme ? ThemeDark : ThemeLigth}>
        <Info>
          <Config theme={theme ? ThemeDark : ThemeLigth}>
            Informações do Usuário
          </Config>
          <UserInfo theme={theme ? ThemeDark : ThemeLigth}>
            <img src={userInfo.image} alt="User Img" />
            <div>
              <span>Nome </span>
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfo.name}
              </ApiText>
            </div>
            <div>
              <span>E-mail </span>
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfo.email}
              </ApiText>
            </div>
            <div>
              <span>Bio </span>
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfo.bio}
              </ApiText>
            </div>
            <div>
              {userInfo.hard_skills?.map((value, index) => (
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
            <img src={userInfo.image} alt="User Img" />
            <button>Add Imagem de Perfil</button>
          </ProfileImage>
          <Config theme={theme ? ThemeDark : ThemeLigth}>
            Configurações do Perfil
          </Config>
          <PersonalInfo theme={theme ? ThemeDark : ThemeLigth}>
            <PersonalInfoEdit>
              <span>Nome </span>
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfo.name}
              </ApiText>
              <EditButton buttonTxt={<AiFillEdit />} height="27px" />
            </PersonalInfoEdit>
            <PersonalInfoEdit>
              <span>Bio </span>
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {userInfo.bio}
              </ApiText>
              <EditButton buttonTxt={<AiFillEdit />} height="27px" />
            </PersonalInfoEdit>

            <PersonalInfoEdit>
              <span>Hard Skills</span>
              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                Adicionar Hard Skill
              </ApiText>
              <EditButton buttonTxt={<AiFillEdit />} height="27px" />
            </PersonalInfoEdit>
          </PersonalInfo>
        </EditInfo>
      </Container>
    </>
  );
};

export default Profile;
