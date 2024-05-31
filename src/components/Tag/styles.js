import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 5px;
  padding: 0.8rem 1.6rem;

  p {
    font-size: 1.2rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  input {
    background-color: transparent;
    max-width: 140px;
  }
`;