import { Container, InnerHeader, Content, Filter, Tag } from "./styles";
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
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  async function fetchCollection() {
    const response = await api.get(`/collections?tags=${selectedTags.join(",")}`);
    setCollection(response.data);

    if (response.data.length === 0) {
      setSelectedTags([]);
    }
    
    await fetchTags();
  }

  async function fetchTags() {
    const response = await api.get("/collections/tags");
    setTags(response.data);
  }

  async function handleSelectedTag(tagName) {
    if(selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter(tag => tag !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  }

  useEffect(() => {
    fetchCollection();
  }, [selectedTags]);

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
            tags.length > 0 &&
            tags.map((tag, index) => (
              <Tag 
                key={index}
                selected={selectedTags.includes(tag.name)}
                onClick={() => handleSelectedTag(tag.name)}
              >
                {tag.name}
              </Tag>
            ))
          }
        </Filter>
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