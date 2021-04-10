import React, { ButtonHTMLAttributes } from 'react';
import ButtonContainer from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  colorText: string;
  border: string;
}

const Button: React.FC<IButtonProps> = ({
  color,
  colorText,
  border,
  children,
  ...rest
}: IButtonProps) => {
  return (
    <ButtonContainer
      color={color}
      colorText={colorText}
      border={border}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
