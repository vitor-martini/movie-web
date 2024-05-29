import styled from "styled-components";

export const Container = styled.div`
  height: 10.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > header {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    padding: 0 3.2rem;
    
    h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-weight: 700;
      font-size: 2.4rem;
      white-space: nowrap;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  
  a {
    white-space: nowrap;
    &:hover {
      filter: none;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;