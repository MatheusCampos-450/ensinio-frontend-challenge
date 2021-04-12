import React from 'react';

import Main from 'pages/Main';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
