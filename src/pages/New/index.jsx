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

  async function handleAdd() {
    if(!title || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await api.post("/movies", { title, description } );
      setTitle("");
      setDescription("");
      alert("Filme cadastrado com sucesso!");
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Ocorreu um erro ao cadastrar o filme.");
      }
    }
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
              <img src={MovieCoverPlaceholder} alt="Capa do filme" />
              <label htmlFor="profilePic">
                <FiCamera size={20} />
                <input type="file" id="profilePic" />
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