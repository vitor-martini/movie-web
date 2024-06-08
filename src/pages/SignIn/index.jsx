import { Container, Form, BackgroundImg } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function handleSignIn() {
    if(!email || !password) {
      alert("Informe todos os campos!");
      return;
    }
    await signIn({ email, password });
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
          inputId={ "email" }
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={ FiLock }
          type="password"
          label={ "Senha" }
          inputId={ "senha" }
          onChange={e => setPassword(e.target.value)}
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