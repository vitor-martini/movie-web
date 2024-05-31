import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK}
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.COLORS.PINK };
  }
`;