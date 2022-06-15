import {useState} from 'react';


export function TicTacToe() {
  return (
    <div className="tic-tac-toe-game">
      <h1>Fun Game</h1>
      <Board />
    </div>
  );
}


function Board() {

const initialBoard = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
]

const [board, setBoard] = useState(initialBoard);

 const [isXturn, setIsXturn] = useState(true);

 const decideWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    
    if(board[a] !== null &&  board[a] === board[b] && board[b] === board[c]) {
      console.log('Winner', board[a]);
      return board[a];
    }
  }
  return null;
 }

 const winner = decideWinner(board);

 const handleClick = (index) => {
  
     //allow updating in untouched boxes
     if(!winner && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? 'X' : 'O';
      setBoard(boardCopy);
      setIsXturn(!isXturn);
     }    
 }

 const handleRestart = () => {
   if(winner) {
    setBoard(initialBoard);
   }
 }


  return (
    <div className="board">
       {board.map((val, index) => {
        return <GameBox onPlayerClick={() => {handleClick(index)}} key={index} val={val}/>
       })}
       
      <h2>Winner is:  {winner}</h2>
      <button className='restart-button' onClick={handleRestart} >Restart</button>
      </div>
  );
}



function GameBox({val, onPlayerClick}) {

  // const [val, setVal] = useState('');

  

  const differentColor = {
    color: (val === 'O') ? 'red' : 'green'
  }

  return(
    <div className="game-box" 
    onClick={onPlayerClick} 
    style={differentColor}>{val}</div>
    
  );
}