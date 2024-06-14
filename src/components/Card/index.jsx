import { Container, Tags } from "./styles";
import { Stars } from "../Stars";
import { Tag } from "../Tag";
import { IoMdAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

export function Card({ data }) {
  return (
    <Container>
      <h1>{data.title}</h1>
      <Stars rating={data.rating} />
      <p>{data.description} </p>
      <Tags>
        {
          data.tags.map(tag => (
            <Tag
              key={tag.id}
              data={{
                id: tag.id,
                name: tag.name,
                icon: IoIosRemoveCircleOutline,
                collectionId: data.id
              }}
            />
          ))
        }

        <Tag
          data = {{
            name:"Novo",
            icon: IoMdAddCircleOutline,
            isNew: true, 
            collectionId: data.id
          }}
        />

      </Tags>
    </Container>
  );
}