import React from 'react';

import Logo from 'assets/logo.svg';

import Button from 'components/Button';
import HeaderContainer from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header">
        <img src={Logo} alt="Ensinio" />

        <div className="menu">
          <a href="/">Soluções</a>
          <a href="/">Preços</a>
          <a href="/">Academy</a>
          <a href="/">Blog</a>
          <a href="/">Contato</a>

          <div className="login">
            <a href="/">Entrar</a>
            <Button
              color="none"
              colorText="white"
              border="0.063rem solid white"
            >
              Começar agora
            </Button>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
