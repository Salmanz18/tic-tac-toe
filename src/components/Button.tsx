import { styled } from 'styled-components';

const StyledButton = styled.button`
  background-color: #405cf5;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  margin-top: 1em;
  color: #ffffff;
  cursor: pointer;
  padding: 0.6em 2em;
`;

interface ButtonProps {
  text?: string | null;
  onClick?: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default Button;
