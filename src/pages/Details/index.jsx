import { Container, Section, Main, Content } from "./styles";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { BackButton } from "../../components/BackButton";
import { Tag } from "../../components/Tag";
import { FiClock } from "react-icons/fi";

export function Details() {

  const tags = [
    { id: 1, name: "Ação" },
    { id: 2, name: "Aventura" },
    { id: 3, name: "Drama" },
  ];

  return (
    <Container>
      <Header/>
      <Main>
        <BackButton/>
        <Section>
          <h1>Interstellar</h1>
          <Stars rating={ 5 }></Stars>
        </Section>
        <Section>
          <img src="https://github.com/vitor-martini.png" alt="Foto de Vitor Martini" />
          <p>Por Vitor Martini</p>
          <FiClock/>
          <p>23/05/22 às 08:00</p>
        </Section>
        <Section>
        {
          tags.map(tag => <Tag key={ tag.id } name={ tag.name }/>)
        }
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