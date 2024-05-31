import { Container } from "./styles";

export function Tag({ name, icon: Icon, isNew = false }) {
  return (
    <Container className={isNew ? "new-tag" : ""}>
      {!isNew && <p>{name}</p>}
      {isNew && <input placeholder="Novo marcador"/>}
      {Icon && <button><Icon /></button>}
    </Container>
  );
}