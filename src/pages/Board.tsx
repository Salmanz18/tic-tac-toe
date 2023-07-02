import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Block from '../components/Block';
import { gameActions } from '../redux/gameSlice';
import { RootState } from '../redux/store';
import Button from '../components/Button';

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

const StyledBoardRow = styled.div`
  display: flex;
  font-weight: bolder;
  font-size: 1.5rem;
`;

function Board() {
  const nextPlayer = useSelector((state: RootState) => state.game.isXNext);
  const gameBoard = useSelector((state: RootState) => state.game.gameBoard);
  const winner = useSelector((state: RootState) => state.game.winner);

  const dispatch = useDispatch();

  const playerValue = nextPlayer ? 'X' : 'O';

  const onBlockClick = (index: number) => {
    if (gameBoard[index] !== null) {
      return null;
    }
    return dispatch(gameActions.updateBlock({ index, value: playerValue }));
  };

  const gameStats = () => {
    if (winner === 'X' || winner === 'O') {
      return `Player ${winner} Wins!`;
    }
    if (winner === 'tie') {
      return "It's a tie!";
    }
    return `Next Player : ${playerValue}`;
  };

  const onResetClick = () => {
    dispatch(gameActions.reset());
  };

  return (
    <StyledBoard>
      <h2>{gameStats()}</h2>
      <StyledBoardRow>
        <Block onClick={() => onBlockClick(0)} value={gameBoard[0]} />
        <Block onClick={() => onBlockClick(1)} value={gameBoard[1]} />
        <Block onClick={() => onBlockClick(2)} value={gameBoard[2]} />
      </StyledBoardRow>
      <StyledBoardRow>
        <Block onClick={() => onBlockClick(3)} value={gameBoard[3]} />
        <Block onClick={() => onBlockClick(4)} value={gameBoard[4]} />
        <Block onClick={() => onBlockClick(5)} value={gameBoard[5]} />
      </StyledBoardRow>
      <StyledBoardRow>
        <Block onClick={() => onBlockClick(6)} value={gameBoard[6]} />
        <Block onClick={() => onBlockClick(7)} value={gameBoard[7]} />
        <Block onClick={() => onBlockClick(8)} value={gameBoard[8]} />
      </StyledBoardRow>
      <Button text="Reset" onClick={onResetClick} />
    </StyledBoard>
  );
}

export default Board;
