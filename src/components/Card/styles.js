import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding: 3.2rem;
  border-radius: 10px;
  gap: 1.6rem;

  > img {
    height: 18rem;
    width: 14rem;
    border-radius: 1rem;
  }
`;
  
export const Content = styled.div`
  flex: 1;
  > h1 {
      font-size: 2.4rem;
      font-weight: 500;
      margin-bottom: 0.8rem;
  }

  > p {
    margin: 1.6rem 0;
    color: ${({ theme }) => theme.COLORS.GRAY};
    word-break: break-all; 
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  gap: 1.6rem;

  > button {
    background-color: transparent;
    height: 3rem;
    border: none;
    outline: none;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    &:focus {
      outline: none;
    }
  }
`;