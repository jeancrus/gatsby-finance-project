import React from 'react';

import SEO from 'src/components/SEO';
import Image from 'src/Image/image';
import { Link } from 'gatsby';
import { Container } from './styles';

export default function NotFoundPage() {
  return (
    <Container>
      <Image />
      <SEO title="404: Página não encontrada" />
      <div className="title">
        <h1>Página não encontrada</h1>
      </div>
      <div className="sub">
        <p>
          Ops! Vamos pedir para que nossos desenvolvedores deixem de preguiça e
          trabalhem nisso...
        </p>
        <p>Xô preguiça!</p>
      </div>
      <div className="forgot-space">
        <Link to="/">Voltar para página inicial</Link>
      </div>
    </Container>
  );
}
