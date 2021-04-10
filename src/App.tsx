import React from 'react';

import AppContainer from 'styles/AppContainer';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <AppContainer>
      <Routes />
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
