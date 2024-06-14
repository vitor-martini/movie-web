import { api } from "../../services/api";
import { Container } from "./styles";
import { useState } from "react";
import { useCollection } from "../../hooks/collection";

export function Tag({ data }) {
  const { collectionData } = useCollection();
  const [newTagName, setNewTagName] = useState("");
  const Icon = data.icon;
  
  async function handleClick() {
    if (data.id) {
      await api.delete(`/collections/removeTag/${data.id}`);
    } else {
      if (!newTagName) return;
      await api.post("/collections/addTag", { collection_id: data.collectionId, name: newTagName });
    }
    await collectionData.fetchCollection();
    setNewTagName("");
  }

  return (
    <Container className={data.isNew ? "new-tag" : ""}>
      {!data.isNew && <p>{data.name}</p>}
      {data.isNew && <input 
                  placeholder="Novo marcador"
                  onChange={e => setNewTagName(e.target.value)}
                  value={newTagName}
                />}
      {Icon && <button
                  type="button"
                  onClick={handleClick}
                > 
                  <Icon size={20}/>
                </button>} 
    </Container>
  );
}