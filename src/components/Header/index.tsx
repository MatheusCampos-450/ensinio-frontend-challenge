import React from 'react';

import Logo from 'assets/logo.svg';

import Button from 'components/Button';
import HeaderContainer from './styles';
import DropdownButtonSolutions from './components/DropdownButtonSolutions';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header">
        <img src={Logo} alt="Ensinio" />

        <div className="menu">
          <DropdownButtonSolutions />
          <a href="/">Preços</a>
          <a href="/">Academy</a>
          <a href="/">Blog</a>
          <a href="/">Contato</a>

          <div className="login">
            <a href="/">Entrar</a>
            <Button
              className="StartNow"
              color="none"
              colorText="white"
              border="0.11rem solid white"
            >
              Começar agora
            </Button>
            <a href="/">PT</a>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
