import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { store } from 'src/store/';
import Layout from 'src/components/Layout';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { signed } = useMemo(() => store.getState().auth, [store]);

  useEffect(() => {
    if (!signed) {
      navigate('/app/');
    }
  }, []);

  return (
    <Layout>
      <Component {...rest} />;
    </Layout>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.object),
};

PrivateRoute.defaultProps = {
  location: undefined,
};

export default PrivateRoute;
