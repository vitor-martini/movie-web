import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; 
  padding: 3.6rem 3.2rem;
  width: 80%;
  margin: 0 auto; 
  overflow: hidden; 
`;

export const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.6rem;

  h1 {
    font-weight: 500;
  }
`;

export const Filter = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 1.6rem; 
`;

export const Tag = styled.div`
  padding: 1.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: 1px solid ${({ theme, selected }) => selected ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800};
  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-y: auto; 
`;
