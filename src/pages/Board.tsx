import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Block from '../components/Block';
import { gameActions } from '../redux/gameSlice';
import { RootState } from '../redux/store';
import Button from '../components/Button';
import { Players } from '../enums/Players';

const StyledGameScreen = styled.div`
  text-align: center;
  margin-top: 5rem;
  > h2 {
    margin-bottom: 2rem;
  }
  > Button {
    margin-top: 2rem;
  }
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 7rem);
  place-items: center;
  justify-content: center;
`;

function Board() {
  const nextPlayer = useSelector((state: RootState) => state.game.isXNext);
  const gameBoard = useSelector((state: RootState) => state.game.gameBoard);
  const winner = useSelector((state: RootState) => state.game.winner);

  const dispatch = useDispatch();

  const playerValue = nextPlayer ? Players.PLAYER_2 : Players.PLAYER_1;

  const onBlockClick = (index: number) => {
    if (gameBoard[index] !== null) {
      return null;
    }
    return dispatch(gameActions.updateBlock({ index, value: playerValue }));
  };

  const gameStats = () => {
    if (winner === Players.PLAYER_2 || winner === Players.PLAYER_1) {
      return `Player ${winner} Wins!`;
    }
    if (winner === 'tie') {
      return "It's a tie!";
    }
    return `Current Player : ${playerValue}`;
  };

  const onResetClick = () => {
    dispatch(gameActions.reset());
  };

  return (
    <StyledGameScreen>
      <h2>{gameStats()}</h2>
      <StyledBoard>
        {gameBoard.map((blockValue, idx) => {
          return <Block key={idx} onClick={() => onBlockClick(idx)} value={blockValue} />;
        })}
      </StyledBoard>
      <Button text="Reset" onClick={onResetClick} />
    </StyledGameScreen>
  );
}

export default Board;
