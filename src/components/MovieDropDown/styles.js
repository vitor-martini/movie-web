import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const List = styled.div`
  max-height: 70rem;
  overflow-y: auto;
  position: absolute;
  border-radius: 10px;
  z-index: 10;
`;

export const Item = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  gap: 1.6rem;
  padding: 1rem;

  > img {
    width: 15rem;
    height: 20rem; 
  }
`;

export const TextContent = styled.div`
  flex: 1;
  
  > p {
    margin: 0.8rem 0;
    text-align: justify;
    word-break: break-all; 
  }
`;

export const MovieHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
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
