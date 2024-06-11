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
  align-items: flex-start;  /* Alinha os itens no início do eixo vertical */
  gap: 1.6rem;
  padding: 1rem;

  > img {
    width: 10rem;
    height: auto; /* Garante que a altura da imagem seja ajustada automaticamente */
  }
`;

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  /* Alinha o conteúdo no início */
  
  > p {
    text-align: justify;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;  /* Coloca os botões em coluna */
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
  margin-bottom: 0.5rem; /* Adiciona espaço abaixo do cabeçalho do filme */
`;
