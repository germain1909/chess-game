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
    let status = '';
    let sourceSelection = 0;

    if(state.sourceSelection === -1)
    {
      if( !squares[i] || squares[i].player !== state.player)
      {
       
        status = "You clicked in a bad spot";
        console.log(state.status);
      }
      else
      {
        squares[i].pieceInfo.style= { ...state.squares[i].pieceInfo.style,backgroundColor:"RGB(213,183,232)"};
        status = "Choose destination for the selected piece";
        sourceSelection = i;
      }
      


        
    }

    else if(state.sourceSelection > -1)
    {
      squares[i].pieceInfo.style= { ...state.squares[i].pieceInfo.style,backgroundColor:"RGB(213,183,232)"};

    }

    //when you call set state if you dont spread through your state it will get set to undefined
    setState({...state,squares:squares,status:status});
   

    
  }

  return(
      <div className="game-board">
  <p>{`${state.status}`}</p>      
  <Board 
  squares = {state.squares}
  onClick = {(i) => handleClick(i)}
  />
</div>)
}


