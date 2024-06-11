import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <header>
        <Link to="/">
          <h1>Movie Collection</h1>
        </Link>
        <Input
          label={"Pesquisar pelo título"}
          inputId={"pesquisar"} />
        <Profile>
          <div>
            <Link to="/profile"><p>{ user.name }</p></Link>
            <Link 
              onClick={signOut} 
              to="/">
                <span>sair</span>
            </Link>
          </div>
          <Link to="/profile">
            <img src={user.avatar} alt={`Foto de ${user.name}`} />
          </Link>
        </Profile>
      </header>
    </Container>
  );
}