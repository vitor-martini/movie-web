import { Container, InnerHeader, Content, Filter, Tag } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Main } from "../../components/Main";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCollection } from "../../hooks/collection";
import { useEffect } from "react";

export function Home() {
  const { user } = useAuth(); 
  const { collectionData } = useCollection();

  async function handleSelectedTag(tagName) {
    if(collectionData.selectedTags.includes(tagName)) {
      collectionData.setSelectedTags(collectionData.selectedTags.filter(tag => tag !== tagName));
    } else {
      collectionData.setSelectedTags([...collectionData.selectedTags, tagName]);
    }
  }

  useEffect(() => {
    async function fetch() {
      await collectionData.fetchCollection();
    }

    fetch();
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
        <Filter>
          {
            collectionData.tags.length > 0 &&
            collectionData.tags.map((tag, index) => (
              <Tag 
                key={index}
                selected={collectionData.selectedTags.includes(tag.name)}
                onClick={() => handleSelectedTag(tag.name)}
              >
                {tag.name}
              </Tag>
            ))
          }
        </Filter>
        <Content>

          {
            collectionData.collection.length > 0 && 
            collectionData.collection.map(movie => (
              <Card
                key={movie.id} 
                data={{
                  id: movie.id,
                  movie_id: movie.movie_id,
                  title: movie.title,
                  rating: movie.rating,
                  description: movie.description,
                  tags: movie.tags,
                  cover: movie.cover
                }} />
            ))
          }
          
        </Content>

      </Main>
    </Container>
  );
}