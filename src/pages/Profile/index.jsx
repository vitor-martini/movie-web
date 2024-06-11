import { Container, Header, Form, ProfilePic } from "./styles";
import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [avatar, setAvatar] = useState(user.avatar);
  const [newAvatar, setNewAvatar] = useState("");
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function validateUpdate() {
    if (!name || !email || !email.includes("@")) {
      alert("É necessário informar um nome e um e-mail!");
      return false;
    }

    return true;
  }

  async function handleUpdate() {
    if (!validateUpdate()) return;

    try {
      await api.put("/users", { name, email, old_password: password, new_password: newPassword });
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.");
      }
      throw error;
    }

    if (newAvatar) {
      const avatarFileName = await uploadAvatar();
      const avatarUrl = `${api.defaults.baseURL}/files/${avatarFileName}`;
      user.avatar = avatarUrl;
    } 

    user.name = name;
    user.email = email;
    user.password ||= password;
    localStorage.setItem("@movies:user", JSON.stringify(user));
    alert("Alterado com sucesso!");
    navigate(-1);
  }

  async function uploadAvatar() {
    const fileUploadForm = new FormData();
    fileUploadForm.append("avatar", newAvatar);
    const response = await api.patch("/users/avatar", fileUploadForm);
    return response.data.avatar;
  }
  
  function handleAvatarChange(event) {
    const file = event.target.files[0];
    setNewAvatar(file);

    const newAvatarPreview = URL.createObjectURL(file);
    setAvatar(newAvatarPreview);
  }

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <Form>
        <ProfilePic>
          <img 
            src={avatar}
            alt={`Foto de ${name}`} />
          <label htmlFor="profilePic">
            <FiCamera size={ 20 }/>
            <input type="file" id="profilePic" onChange={handleAvatarChange}/>
          </label>
        </ProfilePic>
        <Input 
          icon={FiUser}
          label={"Nome"}
          inputId={"name"}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          label={"E-mail"}
          inputId={"email"}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          label={"Senha atual"}
          inputId={"currentPassword"}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          icon={FiLock}
          label={"Nova senha"}
          inputId={"newPassword"}
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />
        <Button 
          title={"Salvar"}
          type="button"
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  );
}