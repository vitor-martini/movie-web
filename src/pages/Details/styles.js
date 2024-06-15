import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const Main = styled.main`
  width: 80%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.4rem;
  overflow: hidden;
  padding: 0 3.2rem;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK}
  }
`;

export const Content = styled.div`
  overflow-y: auto;

  > p {
    text-align: justify;
    overflow-y: auto;
    padding-right: 0.8rem; 
    word-break: break-all; 
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
  }
`;