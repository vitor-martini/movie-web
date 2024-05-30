import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 1.6rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px;

  > svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;