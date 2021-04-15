import Header from "../../components/Header";
import { LoginContext } from "../../providers/login";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Info } from "./style";
const Profile = () => {
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
      <Info>
        <div>{userInfo.image}</div>
        <div>{userInfo.name}</div>
        <div>{userInfo.email}</div>
        <div>{userInfo.bio}</div>
        <div>
          {userInfo.hard_skills?.map((value, index) => (
            <span key={index}>{value} </span>
          ))}
        </div>
      </Info>
      <div>
        <div>Imagem de Perfil </div>
        <div>Imagem</div>
        <div>
          <button>Add Imagem de Perfil</button>
        </div>
        <div>Configurações do Perfil</div>
        <div>{userInfo.image}</div>
        <div>
          {userInfo.name} <button>Nome</button>
        </div>
        <div>
          {userInfo.bio} <button>Bio</button>
        </div>

        <div>Hard Skills</div>
        <div>
          <button>Adicionar Hard Skill</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
