import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0.8rem 0;

  > input {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 1.6rem;
  }

  > svg {
    margin-left: 1.6rem;
  }

`;