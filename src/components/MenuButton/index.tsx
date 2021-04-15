import React, { ButtonHTMLAttributes } from 'react';
import MenuButtonContainer from './styles';

interface IMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: Boolean;
}

const MenuButton: React.FC<IMenuButtonProps> = ({
  isActive,
  ...rest
}: IMenuButtonProps) => {
  return (
    <MenuButtonContainer isActive={isActive} {...rest}>
      <button type="button">
        <label>
          <span />
          <span />
          <span />
        </label>
      </button>
    </MenuButtonContainer>
  );
};

export default MenuButton;
