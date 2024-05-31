import { Container } from "./styles";

export function TextArea({ label, inputId, ...rest }) {
  return (
    <Container>
      <label className="sr-only" htmlFor={ inputId }> { label } </label>
      <textarea 
        id={ inputId }
        placeholder={ label }
        { ...rest }/>
    </Container>
  );
}