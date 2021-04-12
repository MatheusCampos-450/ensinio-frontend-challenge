import React from 'react';

import Header from 'components/Header';
import AppContainer from 'styles/AppContainer';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes />
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
