import Button from 'components/Button';
import React from 'react';
import HeaderModalContainer from './styles';

const HeaderModal = () => {
  return (
    <HeaderModalContainer>
      <div className="Menu">
        <Button
          className="ButtonMenuMobile"
          color="none"
          colorText="white"
          border="0.11rem solid white"
        >
          Soluções
        </Button>
        <Button
          className="ButtonMenuMobile"
          color="none"
          colorText="white"
          border="0.11rem solid white"
        >
          Preços
        </Button>
        <Button
          className="ButtonMenuMobile"
          color="none"
          colorText="white"
          border="0.11rem solid white"
        >
          Academy
        </Button>
        <Button
          className="ButtonMenuMobile"
          color="none"
          colorText="white"
          border="0.11rem solid white"
        >
          Blog
        </Button>
        <Button
          className="ButtonMenuMobile"
          color="none"
          colorText="white"
          border="0.11rem solid white"
        >
          Contato
        </Button>
      </div>
      <div className="Login">
        <Button
          className="ButtonLogin"
          color="none"
          colorText="white"
          border="0.11rem solid white"
        >
          Entrar
        </Button>
        <Button
          className="ButtonStartNow"
          color="none"
          colorText="white"
          border="0.11rem solid white"
        >
          Começar agora
        </Button>
      </div>
    </HeaderModalContainer>
  );
};

export default HeaderModal;
