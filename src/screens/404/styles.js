import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 300px;
    margin-bottom: 1rem;
  }

  .title {
    h1 {
      margin: 1rem 0;
      color: #2a628f;
      font-weight: bold;
    }
  }

  .sub {
    p {
      margin: 1rem 0;
      color: #2a628f;
      font-weight: bold;

      &:last-child {
        text-align: center;
      }
    }
  }
  .forgot-space {
    display: flex;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    a {
      margin-top: 0.6rem;
      color: #fb4500;
    }
  }
`;
