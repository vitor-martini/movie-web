import { Container, Buttons, Form, Tags } from "./styles";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Stars } from "../../components/Stars";
import { BackButton } from "../../components/BackButton";
import { FiPlus, FiX } from "react-icons/fi";

export function New() {
  const tags = [
    { id: 1, name: "Ação" },
    { id: 2, name: "Aventura" },
    { id: 3, name: "Drama" },
  ];

  return (
    <Container>
      <Header/>
      <Main>
        <Form>
          <BackButton/> 
          <h1>Novo filme</h1>
          <Stars 
            rating={ 0 }
            interactive={true}/>
          <Input
            label={"Título"}
            inputId={"titulo"}
          />
          <TextArea
            label={"Observações"}
            inputId={"observacoes"}
          />
          <h2>Marcadores</h2>
          <Tags>
            {
              tags.map(tag => <Tag key={tag.id} name={tag.name} icon={ FiX }/>)
            }
            <Tag 
              name={"Novo marcador"} 
              icon={ FiPlus } 
              isNew={ true }
            />
          </Tags>
          <Buttons>
            <Button className="delete-movie" title={"Excluir filme"}/>
            <Button title={"Salvar"}/>
          </Buttons>
        </Form>
      </Main>
    </Container>
  );
}