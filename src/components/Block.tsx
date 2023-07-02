import { styled } from 'styled-components';

const StyledBlock = styled.div`
  border: 1px solid black;
  padding: 1rem;
  cursor: pointer;
  height: 5em;
  width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface BlockProps {
  value?: string | null;
  onClick?: () => void;
}

function Block({ value, onClick }: BlockProps) {
  return <StyledBlock onClick={onClick}>{value}</StyledBlock>;
}

export default Block;
