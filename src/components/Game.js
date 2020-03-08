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
    console.log(state.sourceSelection);
    if(state.sourceSelection === -1)
    {
      if( !squares[i] || squares[i].player !== state.player)
      {
        console.log(squares[i]);
      }
      else
      {
        squares[i].pieceInfo.style= { ...state.squares[i].pieceInfo.style,backgroundColor:"RGB(213,183,232)"};
      }
      


        
    }

    else if(state.sourceSelection > -1)
    {
      squares[i].pieceInfo.style= { ...state.squares[i].pieceInfo.style,backgroundColor:"RGB(213,183,232)"}

    }

    //when you call set state if you dont spread through your state it will get set to undefined
    setState({...state,squares:squares});
   

    
  }

  return(
      <div className="game-board">
  <Board 
  squares = {state.squares}
  onClick = {(i) => handleClick(i)}
  />
</div>)
}


