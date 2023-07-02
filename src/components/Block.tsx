import { styled } from 'styled-components';

const StyledBlock = styled.div`
  border: 1px solid black;
  padding: 1rem;
  cursor: pointer;
`;

function Block() {
  return <StyledBlock>X</StyledBlock>;
}

export default Block;
