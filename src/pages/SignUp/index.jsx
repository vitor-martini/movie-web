import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function validateFields() {
    if (!name) {
      alert("Informe seu nome!");
      return false;
    }

    if (!email || !email.includes("@")) {
      alert("Informe seu e-mail!");
      return false;
    }

    if (!password || !confirmPassword) {
      alert("Insira sua senha!");
      return false;
    }

    if (password !== confirmPassword) {
      alert("As senhas não conferem!");
      return false;
    }

    return true;
  }

  async function handleSignUp(){
    if (!validateFields()) return;

    try {
      await api.post("/users", { name, email, password });
      alert("Registrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível registrar, verifique as informações.");
      }
    }
  }

  return (
    <Container>
      <Form>
        <h1>Movie Collection</h1>
        <p>Acompanhe tudo o que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          icon={FiUser}
          label={"Nome"}
          inputId={"name"}
          onChange={e => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          type="email"
          label={"E-mail"}
          inputId={"email"} 
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          label={"Senha"}
          inputId={"password"}
          onChange={e => setPassword(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          label={"Confirmar senha"}
          inputId={"confirmPassword"}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <Button
          title="Cadastrar"
          type="button"
          onClick={handleSignUp}
        />
        <Link to="/"> <FiArrowLeft size={20} />Voltar para o login</Link>
      </Form>
    </Container>
  );
}