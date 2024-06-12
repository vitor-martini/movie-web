import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding: 3.2rem;
  border-radius: 10px;

  > h1 {
     font-size: 2.4rem;
     font-weight: 500;
     margin-bottom: 0.8rem;
  }

  > p {
    margin: 1.6rem 0;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  .new-tag {
    background-color: transparent;
    border: 1px dashed ${({ theme }) => theme.COLORS.GRAY };
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.8rem;
`;