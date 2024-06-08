import { Container, Form, BackgroundImg } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function SignIn() {

  function handleSignIn() {
    console.log(api.defaults.baseURL);
  }

  return (
    <Container>
      <Form>
        <h1>Movie Collection</h1>
        <p>Acompanhe tudo o que assistir</p>

        <h2>Faça seu login</h2>
        <Input 
          icon={ FiMail }
          label={ "E-mail" }
          inputId={ "email" }/>

        <Input
          icon={ FiLock }
          label={ "Senha" }
          inputId={ "senha" }
        />

        <Button
          title="Entrar"
          type="button"
          onClick={handleSignIn}
        />

        <Link to="/register"> Criar conta</Link>
      </Form>
      <BackgroundImg />
    </Container>
  );
}