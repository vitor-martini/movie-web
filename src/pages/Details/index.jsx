import { Container, Section, Main, Content } from "./styles";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { BackButton } from "../../components/BackButton";
import { FiClock } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setMovie(response.data);

      if (!response.data.id) {
        navigate("/");
      }
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header/>
      <Main>
        <BackButton/>
        <Section>
          <h1>{movie.title}</h1>
          <Stars rating={movie.rating} interactive={false}/>
        </Section>
        <Section>
          <img src=" https://github.com/vitor-martini.png" alt="Foto de Vitor Martini" />
          <p>Por Vitor Martini</p>
          <FiClock/>
          <p>23/05/22 às 08:00</p>
        </Section>
        <Section>
        </Section>
        <Content>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus  ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt impedit veniam consequuntur consectetur, iusto ducimus fuga repellat sunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magni, dolorum delectus non reprehenderit debitis minima ea soluta incidunt omnis nesciunt 
          </p>
        </Content>
      </Main>
    </Container>
  );
}