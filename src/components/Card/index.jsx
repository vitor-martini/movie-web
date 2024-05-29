import { Container, Tags } from "./styles";
import { Stars } from "../Stars";
import { Tag } from "../Tag";

export function Card({ data }) {
  return (
    <Container>
      <h1>{data.title}</h1>
      <Stars rating={data.rating} />
      <p>{data.description} </p>
      <Tags>
        {
          data.tags.map(tag => <Tag key={tag.id} name={tag.name} />)
        }
      </Tags>
    </Container>
  );
}