import React from 'react';

import Main from 'pages/Main';

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Header />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
