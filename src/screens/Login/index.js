import React, { useEffect, useMemo } from 'react';
import { navigate, Link } from 'gatsby';
import SEO from 'src/components/SEO';
import { store } from 'src/store';
import LoginImage from 'src/Image/loginImage';
import { useForm } from 'react-hook-form';
import LogoImage from 'src/Image/logoImage';
import { Grid } from '@material-ui/core';
import { Container, Main } from './styles';

export default () => {
  const { signed } = useMemo(() => store.getState().auth, [store]);

  useEffect(() => {
    if (signed) {
      navigate('/app/');
    }
  }, []);

  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <SEO title="Minha conta" />
      <div className="login-img">
        <LoginImage />
      </div>
      <Main>
        <div className="login-container">
          <div className="logo-img">
            <LogoImage />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-box">
              <label htmlFor="email">
                <p>E-mail</p>
                <input type="text" name="email" id="email" ref={register} />
              </label>
              <label htmlFor="password">
                <p>Senha</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={register}
                />
              </label>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
        <div className="forgot-space">
          <Link to="/lost-password">Cadastre-se</Link>
          <Link to="/lost-password">Esqueci minha senha</Link>
        </div>
      </Main>
    </Container>
  );
};
