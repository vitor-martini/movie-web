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
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: flex-start;  
  gap: 1.6rem;
  padding: 1rem;

  > img {
    width: 10rem;
    height: auto; 
  }
`;

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  
  > p {
    text-align: justify;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;  
  gap: 1.6rem;

  > button {
    background-color: transparent;
    height: 3rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const MovieHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 0.5rem; 
`;
