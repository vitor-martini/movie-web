import { Container, InnerHeader, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Main } from "../../components/Main";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header/>
      <Main>
        <InnerHeader>
          <h1>Meus filmes</h1>
          <Link to="/new">
            <Button
              icon={ FiPlus }
              title={"Adicionar filme "} />
          </Link>
        </InnerHeader>
        <Content>
          <Card data={{
            title: "Filme 1",
            rating: 5,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum natus commodi est mollitia libero placeat, enim itaque vitae recusandae, officia ullam minus quidem culpa corporis quaerat nulla iusto dolor delectus.",
            tags: [
              { id: 1, name: "Ação" },
              { id: 2, name: "Aventura" },
            ]
          }} />

          <Card data={{
            title: "Filme 2",
            rating: 4.5,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum natus commodi est mollitia libero placeat, enim itaque vitae recusandae, officia ullam minus quidem culpa corporis quaerat nulla iusto dolor delectus.",
            tags: [
              { id: 1, name: "Ação" },
            ]
          }} />


          <Card data={{
            title: "Filme 3",
            rating: 3,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum natus commodi est mollitia libero placeat, enim itaque vitae recusandae, officia ullam minus quidem culpa corporis quaerat nulla iusto dolor delectus.",
            tags: [
              { id: 1, name: "Ação" },
            ]
          }} />


          <Card data={{
            title: "Filme 4",
            rating: 2,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum natus commodi est mollitia libero placeat, enim itaque vitae recusandae, officia ullam minus quidem culpa corporis quaerat nulla iusto dolor delectus.",
            tags: [
              { id: 1, name: "Ação" },
            ]
          }} />


          <Card data={{
            title: "Filme 5",
            rating: 1,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum natus commodi est mollitia libero placeat, enim itaque vitae recusandae, officia ullam minus quidem culpa corporis quaerat nulla iusto dolor delectus.",
            tags: [
              { id: 1, name: "Ação" },
            ]
          }} />

          <Card data={{
            title: "Filme 6",
            rating: 0.5,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum natus commodi est mollitia libero placeat, enim itaque vitae recusandae, officia ullam minus quidem culpa corporis quaerat nulla iusto dolor delectus.",
            tags: [
              { id: 1, name: "Ação" },
            ]
          }} />

          <Card data={{
            title: "Filme 7",
            rating: 0,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum natus commodi est mollitia libero placeat, enim itaque vitae recusandae, officia ullam minus quidem culpa corporis quaerat nulla iusto dolor delectus.",
            tags: [
              { id: 1, name: "Ação" },
            ]
          }} />
        </Content>

      </Main>
    </Container>
  );
}