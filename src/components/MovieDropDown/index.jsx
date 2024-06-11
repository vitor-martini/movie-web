import { Container, List, Item, MovieHeader, TextContent, Buttons } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Input } from "../Input";
import { Stars } from "../Stars";
import movieCoverPlaceHolder from "../../assets/movie-cover-placeholder.png";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useAuth } from "../../hooks/auth";

export function MovieDropDown() {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Input
        label={"Pesquisar pelo título"}
        inputId={"pesquisar"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setShowList(true)}
        onBlur={() => {
          setTimeout(() => setShowList(false), 100);
        }}
      />

      {
        showList && movies.length > 0 &&
        (
          <List>
            {
              movies.map(movie => (
                <Item key={movie.id}>
                  <img
                    src={movie.cover ? `${api.defaults.baseURL}/files/${movie.cover}` : movieCoverPlaceHolder}
                    alt={`Capa de ${movie.title}`}
                  />
                  <TextContent>
                    <MovieHeader>
                      <h2>{movie.title}</h2>
                      <Stars rating={movie.rating} />
                    </MovieHeader>
                    <p>
                      {
                        movie.description.length > 600 ? 
                          `${movie.description.substring(0, 600) }...` : 
                          movie.description}
                      </p>
                  </TextContent>
                  <Buttons>
                    <button type="button">
                      <IoMdAddCircleOutline size={30} />
                    </button>
                    {
                      user.admin ? (
                        <button type="button">
                          <MdEdit size={30} />
                        </button>
                      ) : null
                    }
                  </Buttons>
                </Item>
              ))
            }
          </List>

        )
      }
    </Container>
  );
}
