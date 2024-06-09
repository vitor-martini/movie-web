import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 10px;
  margin: 0.8rem 0;
  width: 100%;

  > textarea {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 1.6rem;
    resize: none;
  }

  > svg {
    margin-left: 1.6rem;
  }

`;