import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from 'src/routes/PrivateRoute';
import PrivatePage from 'src/screens/PrivatePage';

export default function App() {
  return (
    <Router>
      <PrivateRoute path="/app" component={PrivatePage} />
      <PrivateRoute path="/app/private" component={PrivatePage} />
    </Router>
  );
}
