import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CollectionContext = createContext({});

function CollectionProvider({ children }) {

  const [collection, setCollection] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);

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

  useEffect(() => {
    fetchCollection();
  }, [selectedTags]);

  const collectionData = {
    fetchCollection, 
    collection, 
    setCollection,
    selectedTags, 
    setSelectedTags,
    tags,
    setTags
  };

  return (
    <CollectionContext.Provider value={{ collectionData }}>
      { children } 
    </CollectionContext.Provider>
  );
}

function useCollection() {
  const context = useContext(CollectionContext);
  return context;
}

export { CollectionProvider, useCollection };