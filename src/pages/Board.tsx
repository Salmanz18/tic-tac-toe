import { styled } from 'styled-components';
import Block from '../components/Block';

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50vh;
`;

const StyledBoardRow = styled.div`
  display: flex;
`;

function Board() {
  return (
    <StyledBoard>
      <StyledBoardRow>
        <Block />
        <Block />
        <Block />
      </StyledBoardRow>
      <StyledBoardRow>
        <Block />
        <Block />
        <Block />
      </StyledBoardRow>
      <StyledBoardRow>
        <Block />
        <Block />
        <Block />
      </StyledBoardRow>
    </StyledBoard>
  );
}

export default Board;
