import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.6rem;
  > svg {
    color: ${({ theme }) => theme.COLORS.PINK };
  }
`;