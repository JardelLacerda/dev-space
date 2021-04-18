/* eslint-disable react-hooks/exhaustive-deps */
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
  DivIcon,
  Input,
  DivAvatar,
  ImageAvatar,
  Item,
  DivHardSkills,
} from "./style";

import { Tooltip, Button } from "@material-ui/core";
import { Backup, Add } from "@material-ui/icons/";

import { ThemeContext } from "../../providers/theme";
import { ProjectTaks } from "../../providers/project-tasks";
import { storage } from "../../servers/firebase";

import StandardModal from "../../components/Modal";
import Form from "../../components/Form";
import Astronaut from "../../images/astronaut.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    ProfileInfo,
    profileEdit,
    userInfos,
  } = useContext(ProjectTaks);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(false);
  const [submitNameAvaiable, setSubmitNameAvaiable] = useState(false);
  const [submitBioAvaiable, setSubmitBioAvaiable] = useState(false);
  const [submitSkillsAvaiable, setSubmitSkillsAvaiable] = useState(false);
  const [isChangeImage, setIsChangeImage] = useState(false);

  const [progress, setProgress] = useState(0);
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userHardSkill, setUserHardSkills] = useState("Minha hard skill");

  console.log(storage);

  const [load, setLoad] = useState(false);

  const onSubmit = (infoChange, e) => {
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

  const changeHardSkills = (data) => {
    console.log(data.hard_skills);
    data["hard_skills"] = [...userInfos.hard_skills, data.hard_skills];

    profileEdit(user_id, data);
    reset();

    console.log("HARD SKILLS", data);
  };

  const schema = yup.object().shape({
    hard_skills: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleInput = (e) => {
    const isName = e.target.id === "name";
    const isBio = e.target.id === "bio";
    const isSkills = e.target.id === "skills";
    const configProfile = e.target.id === "configProfile";

    isName ? setSubmitNameAvaiable(true) : setSubmitNameAvaiable(false);
    isBio ? setSubmitBioAvaiable(true) : setSubmitBioAvaiable(false);
    isSkills ? setSubmitSkillsAvaiable(true) : setSubmitSkillsAvaiable(false);

    if (configProfile) {
      setSubmitNameAvaiable(false);
      setSubmitBioAvaiable(false);
      setSubmitSkillsAvaiable(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const changeImage = (e) => {
    isChangeImage ? setIsChangeImage(false) : setIsChangeImage(true);
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

    changeImage();
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
    if (user_id !== undefined) {
      ProfileInfo(user_id);
      console.log(userInfos);

      setUserBio(userInfos.bio);
    }
  }, [user_id]);

  useEffect(() => {
    setUserName(userInfos.name);
    setUserBio(userInfos.bio);
  }, [userInfos.name]);

  useEffect(() => {
    ProfileInfo(user_id);
  }, [load]);

  return (
    <>
      <Header />

      <Container theme={theme ? ThemeDark : ThemeLigth}>
        <Info id="configProfile" onClick={(e) => handleInput(e)}>
          <Config theme={theme ? ThemeDark : ThemeLigth}>
            Informações do Usuário
          </Config>

          <UserInfo theme={theme ? ThemeDark : ThemeLigth}>
            {/* {userInfos.image && <img src={userInfos.image} alt="User Img" />} */}
            {userInfos.image && (
              <img
                onClick={(e) => changeImage(e)}
                src={userInfos.image}
                alt="User Img"
              />
            )}
            {isChangeImage && (
              <DivAvatar>
                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>
              </DivAvatar>
            )}

            <div>
              <span>Nome </span>

              <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                {false && userInfos.name}

                {userInfos.name !== undefined ? (
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title="Editar"
                  >
                    <Input
                      id="name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      onClick={(e) => handleInput(e)}
                    />
                  </Tooltip>
                ) : (
                  <input value={""} />
                )}
                {submitNameAvaiable && (
                  <DivIcon>
                    <Backup onClick={(e) => onSubmit(userName)} />
                  </DivIcon>
                )}
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
                {false && userInfos.bio}

                {userInfos.name !== undefined ? (
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title="Editar"
                  >
                    <Input
                      id="bio"
                      value={userBio}
                      onChange={(e) => setUserBio(e.target.value)}
                      onClick={(e) => handleInput(e)}
                    />
                  </Tooltip>
                ) : (
                  <input value={""} />
                )}
                {submitBioAvaiable && (
                  <DivIcon onClick={(e) => onSubmit(userBio)}>
                    <Backup />
                  </DivIcon>
                )}
              </ApiText>
            </div>
            <div>
              <Item>
                <span>Hard Skills</span>{" "}
                <DivIcon>
                  <StandardModal isIcon icon={<Add />}>
                    <Form
                      instructions={{
                        buttonName: "Adicionar",
                        icone: { icone: Astronaut, width: "150px" },
                        inputList: [["hard_skills", "Digite uma hard skill"]],
                        formAction: handleSubmit(changeHardSkills),
                        register: register,
                        errors: errors,
                      }}
                    />
                  </StandardModal>
                </DivIcon>
              </Item>
              <DivHardSkills>
                {userInfos?.hard_skills?.map((value, index) => (
                  <span key={index}>
                    <ApiText theme={theme ? ThemeLigth : ThemeDark}>
                      {value}
                    </ApiText>
                  </span>
                ))}
              </DivHardSkills>
            </div>
          </UserInfo>
        </Info>
      </Container>
    </>
  );
};

export default Profile;
