import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  p {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
    border-radius: 10px;
  }
`;