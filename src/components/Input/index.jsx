import { Container } from "./styles";

export function Input({ icon: Icon, label, inputId, ...rest }) {
  return (
    <Container>
      { Icon && <Icon size={ 20 }/> }
      <label className="sr-only" htmlFor={ inputId }> { label } </label>
      <input 
        id={ inputId }
        placeholder={ label }
        { ...rest }/>
    </Container>
  );
}