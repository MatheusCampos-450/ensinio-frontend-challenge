import styled from 'styled-components';

interface IStyledButtonProps {
  color: string;
  colorText: string;
  border: string;
}

const ButtonContainer = styled.button<IStyledButtonProps>`
  background: ${props => props.color};
  color: ${props => props.colorText};
  border: ${props => props.border};
`;

export default ButtonContainer;
