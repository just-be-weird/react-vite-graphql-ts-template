import { useState } from 'react';
import { Grid } from '@mantine/core';

type TBoard = string | null;

function TTT() {
  const [board, setBoard] = useState<TBoard[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState<string | null>(null);

  const handleCellClick = (index: number) => {
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    checkWinner(newBoard);
  };

  const checkWinner = (board: TBoard[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) {
      setWinner('Draw');
    }
  };

  console.log(board);

  return (
    <div>
      <Grid
        className='board'
        style={{
          width: 320,
          gridGap: '10px',
          backgroundColor: 'white',
        }}
      >
        {board.map((value, index) => (
          <Grid.Col
            span={4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              height: 100,
              border: '1px solid black',
              fontSize: 36,
              cursor: 'pointer',
            }}
            key={index}
            onClick={() => handleCellClick(index)}
          >
            {value}
          </Grid.Col>
        ))}
      </Grid>
      {winner && <h2>{winner} has won!</h2>}
    </div>
  );
}
export default TTT;
