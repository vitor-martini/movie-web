import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Movie Collection</h1>
        <p>Acompanhe tudo o que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          icon={FiUser}
          label={"Nome"}
          inputId={"nome"}
        />

        <Input
          icon={FiMail}
          label={"E-mail"}
          inputId={"email"} />

        <Input
          icon={FiLock}
          label={"Senha"}
          inputId={"senha"}
        />


        <Button
          title="Cadastrar"
          type="Submit"
        />

        <Link to="/"> <FiArrowLeft size={20} />Voltar para o login</Link>
      </Form>
    </Container>
  );
}