import { useEffect, useRef, useState } from "react";
import { Container, List, Item, MovieHeader, TextContent, Buttons } from "./styles";
import { api } from "../../services/api";
import { Input } from "../Input";
import movieCoverPlaceHolder from "../../assets/movie-cover-placeholder.png";
import { IoMdAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useAuth } from "../../hooks/auth";
import { useCollection } from "../../hooks/collection";
import { useNavigate } from "react-router-dom";

export function MovieDropDown() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { collectionData } = useCollection();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);
  const containerRef = useRef(null);

  async function handleRemove(collectionId) {
    await api.delete(`/collections/${collectionId}`);
    await collectionData.fetchCollection();
  }

  async function handleAdd(movieId) {
    await api.post("/collections", { movie_id: movieId });
    await collectionData.fetchCollection();
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      const sortedMovies = response.data.sort((a, b) => a.title.localeCompare(b.title));
      setMovies(sortedMovies);
    }

    fetchMovies();
  }, [search]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowList(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <Container ref={containerRef}>
      <Input
        label={"Pesquisar pelo título"}
        inputId={"pesquisar"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setShowList(true)}
      />

      {showList && movies.length > 0 && (
        <List>
          {movies.map(movie => {
            const collectionItem = collectionData.collection.find(x => x.movie_id === movie.id);
            const collectionId = collectionItem ? collectionItem.id : null;
            const Icon = collectionId ? IoIosRemoveCircleOutline : IoMdAddCircleOutline;
            const handleClick = collectionId ? () => handleRemove(collectionId) : () => handleAdd(movie.id);

            return (
              <Item key={movie.id}>
                <img
                  src={movie.cover ? `${api.defaults.baseURL}/files/${movie.cover}` : movieCoverPlaceHolder}
                  alt={`Capa de ${movie.title}`}
                />
                <TextContent>
                  <MovieHeader>
                    <h2>{movie.title}</h2>
                  </MovieHeader>
                  <p>
                    {movie.description.length > 600 ?
                      `${movie.description.substring(0, 600)}...` :
                      movie.description}
                  </p>
                </TextContent>
                <Buttons>
                  <button
                    type="button"
                    onClick={() => navigate(`/details/${movie.id}`)}
                  >
                    <FaEye size={30} />
                  </button>
                  <button
                    type="button"
                    onClick={handleClick}
                  >
                    <Icon size={30} />
                  </button>
                  
                  {user.admin && (
                    <button 
                      type="button"
                      onClick={() => navigate(`/edit/${movie.id}`)}
                    >
                      <MdEdit size={30} />
                    </button>
                  )}
                </Buttons>
              </Item>
            );
          })}
        </List>
      )}
    </Container>
  );
}
