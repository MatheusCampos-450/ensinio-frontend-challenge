import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IMenuButtonContainer extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: Boolean;
}

const MenuButtonContainer = styled.button<IMenuButtonContainer>`
  button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: none;
    border: none;

    position: relative;

    height: 1.375rem;
    width: 1.875rem;

    span {
      position: absolute;
      display: block;
      height: 0.313rem;
      width: 100%;
      border-radius: 1.875rem;
      background: white;
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: ${Props => (Props.isActive ? '8px' : '0')};
        transform: ${Props => (Props.isActive ? 'rotate(-45deg)' : 'none')};
      }

      &:nth-child(2) {
        top: 8px;
        opacity: ${Props => Props.isActive && 0};
      }

      &:nth-child(3) {
        top: ${Props => (Props.isActive ? '8px' : '16px')};
        transform: ${Props => (Props.isActive ? 'rotate(45deg)' : 'none')};
      }
    }
  }
`;

export default MenuButtonContainer;
