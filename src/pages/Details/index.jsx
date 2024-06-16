import { Container, Section, HeaderSection, Main, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { FiClock } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { formatDate } from "../../services/utils";
import { IoMdAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import avatarPlaceholder from "../../assets/avatar-placeholder.svg";
import { useCollection } from "../../hooks/collection";

export function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const [movie, setMovie] = useState({});
  const avatar = movie.avatar ? `${api.defaults.baseURL}/files/${movie.avatar}` : avatarPlaceholder;
  const { collectionData } = useCollection();
  const collectionId = collectionData.collection.filter(x => x.movie_id === movie.id)[0]?.id;
  const Icon = collectionId ? IoIosRemoveCircleOutline : IoMdAddCircleOutline;
  const handleClick = collectionId ? () => handleRemove(collectionId) : () => handleAdd(movie.id);

  async function handleRemove(collectionId) {
    await api.delete(`/collections/${collectionId}`);
    await collectionData.fetchCollection();
  }

  async function handleAdd(movieId) {
    await api.post("/collections", { movie_id: movieId });
    await collectionData.fetchCollection();
  }

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
          <HeaderSection>
            <h1>{movie.title}</h1>
            <button
              type="button"
              onClick={handleClick}
            >
              <Icon size={30} />
            </button>
          </HeaderSection>
        </Section>
        <Section>
          <img src={avatar} alt={`Foto de ${movie.created_by}`} />
          <p>Por {movie.created_by}</p>
          <FiClock/>
          <p>{formatDate(movie.updated_at)}</p>
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