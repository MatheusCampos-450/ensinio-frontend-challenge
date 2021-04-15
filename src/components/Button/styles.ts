import styled from 'styled-components';

interface IStyledButtonProps {
  color: string;
  colorText: string;
  border: string;
}

const ButtonContainer = styled.button<IStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  width: 10rem;
  height: 2.5rem;

  background: ${props => props.color};
  color: ${props => props.colorText};

  border: ${props => props.border};
  border-radius: 5rem;
`;

export default ButtonContainer;
