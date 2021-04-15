import React from 'react';

import Logo from 'assets/logo.svg';
import ProfileIcon from 'assets/profile-icon.svg';
import Separator from 'assets/separator.svg';

import MenuButton from 'components/MenuButton';
import Button from 'components/Button';
import HeaderContainer from './styles';
import DropdownButtonSolutions from './components/DropdownButtonSolutions';
import { DropdownButtonLanguages } from './components/DropdownButtonLanguages';

const Header = ({ showMobileModal, mobileVisibility }: any) => {
  const handleOpen = () => {
    if (showMobileModal) showMobileModal(!mobileVisibility);
  };

  return (
    <HeaderContainer>
      <div className="header">
        <img className="logoImage" src={Logo} alt="Ensinio" />

        <MenuButton
          className="MobileMenuButton"
          type="button"
          onClick={handleOpen}
          isActive={mobileVisibility}
        />

        <div className="menu">
          <div className="ButtonsMenu">
            <DropdownButtonSolutions />
            <a href="/">Preços</a>
            <a href="/">Academy</a>
            <a href="/">Blog</a>
            <a href="/">Contato</a>
          </div>

          <div className="login">
            <img className="Separator" src={Separator} alt="" />
            <a href="/">
              <img className="ProfileIcon" src={ProfileIcon} alt="" />
              Entrar
            </a>
            <Button
              className="StartNow"
              color="none"
              colorText="white"
              border="0.11rem solid white"
            >
              Começar agora
            </Button>
            <DropdownButtonLanguages />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
