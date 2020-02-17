import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  background: #ebe9e9;
  .login-img {
    width: 100%;
    max-width: 600px;
    height: 100%;
    .gatsby-image-wrapper {
      height: 100vh;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .login-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.2rem;
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ffffff;
      max-width: 400px;
      padding: 40px;
      /* border: 1px solid #ccc; */
      box-shadow: 0 10px 10px -5px;
      border-radius: 5px;

      .login-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        label {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          p {
            margin: 1rem 0;
            color: #2a628f;
            font-weight: bold;
          }
          input {
            background: #e5e7e9;
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #000022;
            margin: 0 0 10px;

            &::placeholder {
              color: #94b0da;
            }
          }
        }
        button {
          border: transparent;
          padding: 8px;
          border-radius: 4px;
          background: #001242;
          color: #fff;
          font-weight: bold;
          font-size: 0.9rem;
        }
      }
    }
    .logo-img {
      width: 100%;
      height: 100%;
      max-width: 100px;
      max-height: 100px;
      text-align: center;
      margin-bottom: 1.2rem;
    }
  }
  .forgot-space {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    width: 100%;
    a {
      margin-top: 0.6rem;
      color: #fb4500;
    }
  }
`;
