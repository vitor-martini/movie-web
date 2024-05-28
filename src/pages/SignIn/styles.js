import styled from "styled-components";
import wallpaper from "../../assets/wallpaper.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  min-width: 500px;
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-weight: 700;
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    margin: 4rem 0 3.2rem;
  }

  > button {
    margin: 1.6rem 0 4.2rem;
  }

  > a {
    text-align: center; 
    color: ${({ theme }) => theme.COLORS.PINK };
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${ wallpaper }) no-repeat center center;
  background-size: cover;
  filter: brightness(0.5);
`;