import React from 'react';

import { useSelector } from 'react-redux';
import Login from 'src/screens/Login';

export default () => {
  const state = useSelector(reducer => reducer.auth);

  return <Login />;
};
