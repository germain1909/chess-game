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

    //source selection is the i  of the previous piece selecte or or -1 if no piece is previously selected
    if(state.sourceSelection === -1)
    {
      //if the first piece you clicked is null or the first piece you clicked is not of the same player as who's turn it is 
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
      //if the space for your second piece has a piece and its of the same color of who's turn it is 
      if(squares[i] && squares[i].pieceInfo.player === state.player)
      {
        console.log(squares[i] );
        squares[state.sourceSelection].pieceInfo.style= { ...state.squares[state.sourceSelection].pieceInfo.style,backgroundColor:null};
        status = "Wrong selection. Choose valid source and destination again.";
        sourceSelection = -1;
      }
      else
      {
        //const squares = this.state.squares.slice();
        const isDestEnemyOccupied = squares[i]? true : false; 
        const isMovePossible = squares[state.sourceSelection].isMovePossible(state.sourceSelection, i, isDestEnemyOccupied);
        const srcToDestPath = squares[state.sourceSelection].getSrcToDestPath(state.sourceSelection, i);
        const isMoveLegal = getIsMoveLegal(srcToDestPath);

        //actually move a pice
        squares[i] = squares[state.sourceSelection];

      }
     
      
      

    }

    //when you call set state if you dont spread through your state it will get set to undefined
    setState({...state,squares:squares,status:status,sourceSelection:sourceSelection});
   

    
  }

  const getIsMoveLegal = (srcToDestPath) =>{
    let isLegal = true;
    for(let i = 0; i < srcToDestPath.length; i++){
      if(state.squares[srcToDestPath[i]] !== null){
        isLegal = false;
      }
    }
    return isLegal;
  }

  return(
    <div>
      <div className="game-board">      
        <Board 
          squares = {state.squares}
          onClick = {(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
          <p>{`${state.status}`}</p>
      </div>
     </div> 
)
}


