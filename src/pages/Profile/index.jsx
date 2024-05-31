import { Container, Header, Form, ProfilePic } from "./styles";
import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

export function Profile() {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <Form>
        <ProfilePic>
          <img src="https://github.com/vitor-martini.png" alt="Foto de Vitor Martini" />
          <label htmlFor="profilePic">
            <FiCamera size={ 20 }/>
            <input type="file" id="profilePic" />
          </label>
        </ProfilePic>
        <Input 
          icon={FiUser}
          label={"Usuário"}
          inputId={"username"}/>
        <Input
          icon={FiMail}
          label={"E-mail"}
          inputId={"email"}
        />
        <Input
          icon={FiLock}
          label={"Senha atual"}
          inputId={"currentPassword"}
        />
        <Input
          icon={FiLock}
          label={"Nova senha"}
          inputId={"newPassword"}
        />
        <Button title={"Salvar"}/>
      </Form>
    </Container>
  );
}