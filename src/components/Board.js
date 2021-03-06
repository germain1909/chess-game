import React from 'react';

import '../index.css';
import {Square} from './Square.js';
import {initialiseChessBoard} from '../helpers/intialise-chess'

export function Board(props) {

  const renderSquare = (i, squareShade) => {
    return <Square 
    piece = {props.squares[i]} 
    style = {props.squares[i]? props.squares[i].pieceInfo.style : null}
    shade = {squareShade}
    onClick={() => props.onClick(i)}
    />
  };

  const board = [];
        for(let i = 0; i < 8; i++){
          const squareRows = [];
          for(let j = 0; j < 8; j++){
            const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
            squareRows.push(renderSquare((i*8) + j, squareShade));
          }
          board.push(<div className="board-row">{squareRows}</div>)
        }

    return (
        

      <div>
        {board}
      </div>
    );
}

function isEven(num){
  return num % 2 == 0
}