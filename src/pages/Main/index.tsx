import React from 'react';

import Home from './components/Home';
import ResourcesContent from './components/ResourcesContent';
import MainContainer from './styles';

const Main = () => {
  return (
    <MainContainer>
      <Home />
      <ResourcesContent />
    </MainContainer>
  );
};

export default Main;
