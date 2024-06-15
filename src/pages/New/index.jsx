import { Container, Buttons, Form, Details, MovieCover, MovieInfo } from "./styles";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import MovieCoverPlaceholder from "../../assets/movie-cover-placeholder.png";
import { FiCamera } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";

export function New() {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newCover, setNewCover] = useState("");
  const [cover, setCover] = useState("");

  function validate() {
    if (!title || !description) {
      alert("Preencha todos os campos!");
      return false;
    }

    return true;
  }

  function clearFields() {
    setTitle("");
    setDescription("");
    setCover("");
    setNewCover("");
  }

  async function handleUpdate() {
    if(!validate()) {
      return;
    }

    try {
      await api.put(`/movies/${params.id}`, { title, description });

      if (newCover) {
        await uploadCover(params.id, newCover);
      }

      alert("Filme atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.log(error);
        alert("Ocorreu um erro ao atualizar o filme.");
      }
    }
  }

  async function handleAdd() {
    if (!validate()) {
      return;
    }

    try {
      const response = await api.post("/movies", { title, description });
      const movieId = response.data.id;

      if (newCover) {
        await uploadCover(movieId, newCover);
      }

      clearFields();
      alert("Filme cadastrado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Ocorreu um erro ao cadastrar o filme.");
      }
    }
  }

  async function uploadCover(movieId, cover) {
    const fileUploadForm = new FormData();
    fileUploadForm.append("cover", cover);

    try {
      await api.patch(`/movies/cover/${movieId}`, fileUploadForm);
    } catch (error) {
      await api.delete(`/movies/${movieId}`);
      throw error;
    }
  }

  async function handleCoverUpdate(event) {
    const file = event.target.files[0];
    setNewCover(file);
    const newCoverPreview = URL.createObjectURL(file);
    setCover(newCoverPreview);
  }

  async function handleDelete() {
    await api.put(`/movies/${params.id}`, { active: false });
    alert("Filme excluído com sucesso!");
    navigate("/");    
  }

  useEffect(() => {
    async function fetchMovie(id) {
      const response = await api.get(`/movies/${id}`);
      if (response.data) {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCover(response.data.cover ? 
                  `${api.defaults.baseURL}/files/${response.data.cover}` : 
                  null
                );
      }
    }

    if (params.id) {
      fetchMovie(params.id);
    }
  }, [params.id]);

  return (
    <Container>
      <Header/>
      <Main>
        <Form>
          <BackButton/> 
          <h1>{`${params.id ? "Editar" : "Cadastrar"} filme`}</h1>
          <Details>
            <MovieCover>
              <img src={cover ? cover : MovieCoverPlaceholder} alt="Capa do filme" />
              <label htmlFor="cover">
                <FiCamera size={20} />
                <input 
                  type="file" 
                  id="cover" 
                  onChange={handleCoverUpdate}
                />
              </label>
            </MovieCover>
            <MovieInfo>
              <Input
                label={"Título"}
                inputId={"titulo"}
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
              <TextArea
                label={"Descrição"}
                inputId={"descricao"}
                onChange={e => setDescription(e.target.value)}
                value={description}
              />
            </MovieInfo>
          </Details>
          <Buttons>
            {
              params.id &&
              <Button
                className="delete-movie"
                title={"Excluir filme"}
                type="Button"
                onClick={handleDelete}
              />
            }
            <Button 
              title={params.id ? "Editar" : "Cadastrar"}
              onClick={params.id ? handleUpdate : handleAdd }
              type="Button"
            />
          </Buttons>
        </Form>
      </Main>
    </Container>
  );
}