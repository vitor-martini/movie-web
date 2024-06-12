import { Container, InnerHeader, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Main } from "../../components/Main";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const { user } = useAuth(); 
  const [collection, setCollection] = useState([]);

  async function fetchCollection() {
    const response = await api.get("/collections");
    setCollection(response.data);

    console.log("entrou");
  }

  useEffect(() => {
    fetchCollection();
  }, []);

  return (
    <Container>
      <Header/>
      <Main>
        <InnerHeader>
          <h1>Meus filmes</h1>
          {
            user.admin ? (
              <Link to="/new">
                <Button
                  icon={FiPlus}
                  title={"Adicionar filme "} />
              </Link>
            ) : null
          }
        </InnerHeader>
        <Content>

          {
            collection.length > 0 && 
            collection.map(movie => (
              <Card
                fetchCollection={fetchCollection}
                key={movie.id} 
                data={{
                  id: movie.id,
                  title: movie.title,
                  rating: movie.rating,
                  description: movie.description,
                  tags: movie.tags
                }} />
            ))
          }
          
        </Content>

      </Main>
    </Container>
  );
}