import React, {useState} from 'react';
import '../index.css';
import {Board} from './Board.js';
import {initialiseChessBoard} from '../helpers/intialise-chess'

export default function Game(){
 const  [state,setState] = useState({
  squares: initialiseChessBoard(),
  player: 1,
  sourceSelection: -1,
  status: '',
  turn: 'white'
});

  const handleClick = (i)=>{
    
    let squares = state.squares.slice();
    squares[i].pieceInfo.style= { ...state.squares[i].pieceInfo.style,backgroundColor:'Green'}
    setState({squares:squares});
    console.log(squares[i].pieceInfo.style);
  }

  return(
      <div className="game-board">
  <Board 
  squares = {state.squares}
  onClick = {(i) => handleClick(i)}
  />
</div>)
}
