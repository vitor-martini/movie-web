import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  height: 20%;
  display: flex;  
  padding-left: 10%;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 0.8rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 0.8rem;
  }
`;

export const ProfilePic = styled.div`
  position: relative;
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;