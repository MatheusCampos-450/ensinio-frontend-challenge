import React from 'react';

import Logo from 'assets/logo.svg';
import ProfileIcon from 'assets/profile-icon.svg';
import Separator from 'assets/separator.svg';

import MenuButton from 'components/MenuButton';
import Button from 'components/Button';
import HeaderContainer from './styles';
import DropdownButtonSolutions from './components/DropdownButtonSolutions';
import { DropdownButtonLanguages } from './components/DropdownButtonLanguages';

interface IHeaderProps {
  setShowMobileModal: Function;
  showMobileModal: Boolean;
}

const Header: React.FC<IHeaderProps> = ({
  setShowMobileModal,
  showMobileModal,
}: IHeaderProps) => {
  const handleOpen = () => {
    if (setShowMobileModal) setShowMobileModal(!showMobileModal);
  };

  return (
    <HeaderContainer>
      <div className="Header">
        <img className="LogoImage" src={Logo} alt="Ensinio" />

        <MenuButton
          className="MobileMenuButton"
          type="button"
          onClick={handleOpen}
          isActive={showMobileModal}
        />

        <div className="Menu">
          <div className="ButtonsMenu">
            <DropdownButtonSolutions />
            <a href="/">Preços</a>
            <a href="/">Academy</a>
            <a href="/">Blog</a>
            <a href="/">Contato</a>
          </div>

          <div className="Login">
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
