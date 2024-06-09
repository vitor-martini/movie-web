import { Container, Buttons, Form, Details, MovieCover, MovieInfo } from "./styles";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import MovieCoverPlaceholder from "../../assets/movie-cover-placeholder.png";
import { FiCamera } from "react-icons/fi";

export function New() {
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
              />
              <TextArea
                label={"Descrição"}
                inputId={"descricao"}
              />
            </MovieInfo>
          </Details>
          <Buttons>
            <Button className="delete-movie" title={"Excluir filme"}/>
            <Button title={"Salvar"}/>
          </Buttons>
        </Form>
      </Main>
    </Container>
  );
}