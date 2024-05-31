import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .new-tag {
    background-color: transparent;
    border: 1px dashed ${({ theme }) => theme.COLORS.GRAY };
  }

  .delete-movie {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000 };
    color: ${({ theme }) => theme.COLORS.PINK };
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow-y: auto;

  > h1 {
    margin-bottom: 3.2rem;
  }

  > h2 {
    color:  ${({ theme }) => theme.COLORS.GRAY};
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }
`;

export const Tags = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  display: flex;
  flex-wrap: wrap;
  padding: 1.6rem;
  border-radius: 10px;
  align-items: center;
  gap: 0.8rem;
`;

export const Buttons = styled.div`
  margin-top: 1.6rem;
  display: flex;
  gap: 1.6rem;
  
  > button {
    width: 100%;
  }

  .add-tag {
    background-color: green;
  }
`;