import { Container, Tags, Content, Buttons } from "./styles";
import { Tag } from "../Tag";
import { IoMdAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import CoverPlaceholder from "../../assets/movie-cover-placeholder.png";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../../hooks/collection";

export function Card({ data }) {
  const navigate = useNavigate();
  const { collectionData } = useCollection();
  async function handleRemove(collectionId) {
    await api.delete(`/collections/${collectionId}`);
    await collectionData.fetchCollection();
  }

  return (
    <Container>
      <img src={`${data.cover ? `${api.defaults.baseURL}/files/${data.cover}` : CoverPlaceholder}`} alt="Capa do filme" />
      <Content>
        <h1>{data.title}</h1>
        <p>{data.description.length > 300 ?
            `${data.description.substring(0, 300)}...` :
            data.description}</p>
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
      </Content>
      <Buttons>
        <button
          type="button"
          onClick={() => navigate(`/details/${data.movie_id}`)}
        >
          <FaEye size={30} />
        </button>
        <button
          type="button"
          onClick={() => handleRemove(data.id)}
        >
          <IoIosRemoveCircleOutline size={30} />
        </button>
      </Buttons>
    </Container>
  );
}