import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <header>
        <h1>Movie collection</h1>
        <Input
          label={"Pesquisar pelo título"}
          inputId={"pesquisar"} />

        <Profile>
          <div>
            <Link to="/profile"><p>Vitor Martini</p></Link>
            <Link to="/"><span>sair</span></Link>
          </div>
          <Link to="/profile">
            <img src="https://github.com/vitor-martini.png" alt="Foto de Vitor Martini" />
          </Link>
        </Profile>
      </header>
    </Container>
  );
}