import React from 'react';
import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Página não encontrada" />
    <h1>Página não encontrada</h1>
    <p>
      Iremos fazer nosso desenvolvedor trabalhar nisso...ele tá meio preguiçoso!
    </p>
  </Layout>
);

export default NotFoundPage;
