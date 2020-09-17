import React, {useState} from 'react';
import '../index.css';
import {Board} from './Board.js';
import {initialiseChessBoard} from '../helpers/intialise-chess'
import {FallenSoldiers} from './FallenSoldiers'

export default function Game(){
 const  [state,setState] = useState({
  squares: initialiseChessBoard(),
  player: 1,
  sourceSelection: -1,
  status: '',
  turn: 'white'
});

  const [fallenSoldiers,updateFallenSoldiers] = useState({
    whiteFallenSoldiers:[],
    blackFallenSoldiers:[]
  })

  const handleClick = (i)=>{
    
    let squares = state.squares.slice();
    let status = '';
    let sourceSelection = state.sourceSelection;
    let player = state.player;
    let turn = state.turn;
    let blackFallenSoldiers = fallenSoldiers.blackFallenSoldiers;
    let whiteFallenSoldiers = fallenSoldier.whiteFallenSoldiers;

    //source selection is the i  of the previous piece selecte or or -1 if no piece is previously selected
    if(state.sourceSelection === -1)
    {
      //if the first piece you clicked is null or the first piece you clicked is not of the same player as who's turn it is 
      if( !squares[i] || squares[i].player !== state.player)
      {
       
        status = "Wrong selection. Choose player " + state.player + " pieces.";
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
        const isDestEnemyOccupied = squares[i]? true : false; 
        const isMovePossible = squares[state.sourceSelection].isMovePossible(state.sourceSelection, i, isDestEnemyOccupied);
        const srcToDestPath = squares[state.sourceSelection].getSrcToDestPath(state.sourceSelection, i);
        const isMoveLegal = getIsMoveLegal(srcToDestPath);

        //Check if moves are valid logic
        if(isMovePossible && isMoveLegal){
          if(squares[i] !== null){
            if(squares[i].player === 1){
              //whiteFallenSoldiers.push(squares[i]);
              whiteFallenSoldiers.push(squares[i]);

            }
            else{
              //blackFallenSoldiers.push(squares[i]);
              blackFallenSoldiers.push(squares[i]);
            }
          }

          //actually move a piece
          squares[i] = squares[state.sourceSelection];
          squares[state.sourceSelection].pieceInfo.style= { ...state.squares[state.sourceSelection].pieceInfo.style,backgroundColor:null};
          //null out piece previous location
          squares[state.sourceSelection] = null;
          //Alternate player & alternate turn
          player = state.player === 1? 2: 1;
          turn = state.turn === 'white'? 'black' : 'white';
          sourceSelection = -1;
          }
        else
        {
          status = "Not a valid move for that piece";
        }
       
   

      }
     
      
      

    }

    //when you call set state if you dont spread through your state it will get set to undefined
    //setState({...state,squares:squares,status:status,sourceSelection:sourceSelection});
    setState({...state,squares:squares,status:status,sourceSelection:sourceSelection,player: player,turn: turn});
   

    
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
      <div>
        <p>Fallen Soldiers</p>
        <FallenSoldiers whiteFallenSoldiers={whiteFallenSoldiers} blackFallenSoldiers={blackFallenSoldiers}/>
      </div>
      <div className="game-info">
          <p>{`${state.status}`}</p>
      </div>
     </div> 
)
}


