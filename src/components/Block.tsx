import { ReactNode } from 'react';
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
  box-shadow: 0px 0px 3px;
  > p {
    font-size: 6.5rem;
  }
`;

interface BlockProps {
  value?: string | null;
  onClick?: () => void;
  children?: ReactNode;
}

function Block({ value, onClick }: BlockProps) {
  return (
    <StyledBlock onClick={onClick}>
      <p>{value}</p>
    </StyledBlock>
  );
}

export default Block;
