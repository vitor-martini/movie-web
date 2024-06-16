import { Container, Section, Main, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { FiClock } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import avatarPlaceholder from "../../assets/avatar-placeholder.svg";

export function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const [movie, setMovie] = useState({});
  const avatar = movie.avatar ? `${api.defaults.baseURL}/files/${movie.avatar}` : avatarPlaceholder;

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setMovie(response.data);

      if (!response.data.id) {
        navigate("/");
      }
    }

    fetchMovie();
  }, [params.id]);

  return (
    <Container>
      <Header/>
      <Main>
        <BackButton/>
        <Section>
          <h1>{movie.title}</h1>
        </Section>
        <Section>
          <img src={avatar} alt={`Foto de ${movie.created_by}`} />
          <p>Por {movie.created_by}</p>
          <FiClock/>
          <p>{movie.updated_at}</p>
        </Section>
        <Section>
        </Section>
        <Content>
          <p>
            {movie.description}
          </p>
        </Content>
      </Main>
    </Container>
  );
}