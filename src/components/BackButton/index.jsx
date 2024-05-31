import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";

export function BackButton() {
  return (
    <Container>
      <Link to="/">
        <FiArrowLeft />
        Voltar
      </Link>
    </Container>
  );
}