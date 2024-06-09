import { Container, Buttons, Form, Details, MovieCover, MovieInfo } from "./styles";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import MovieCoverPlaceholder from "../../assets/movie-cover-placeholder.png";
import { FiCamera } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newCover, setNewCover] = useState("");
  const [cover, setCover] = useState("");

  async function handleAdd() {
    if (!title || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await api.post("/movies", { title, description });
      const movieId = response.data.id;

      if (newCover) {
        await uploadCover(movieId, newCover);
      }

      setTitle("");
      setDescription("");
      setCover("");
      setNewCover("");
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

  return (
    <Container>
      <Header/>
      <Main>
        <Form>
          <BackButton/> 
          <h1>Novo filme</h1>
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
            <Button 
              className="delete-movie" 
              title={"Excluir filme"}
              type="Button"
            />
            <Button 
              title={"Cadastrar"}
              onClick={handleAdd}
              type="Button"
            />
          </Buttons>
        </Form>
      </Main>
    </Container>
  );
}