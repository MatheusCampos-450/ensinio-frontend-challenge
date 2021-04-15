import React, { useState } from 'react';

import Header from 'components/Header';
import HeaderModal from 'components/Header/components/HeaderModal';

import AppContainer from 'styles/AppContainer';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  const [showMobileModal, setShowMobileModal] = useState(false);

  return (
    <AppContainer>
      <Header
        showMobileModal={setShowMobileModal}
        mobileVisibility={showMobileModal}
      />
      {showMobileModal && <HeaderModal />}
      <Routes />
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
