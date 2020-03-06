import React from 'react';
import '../index.css';
import {Board} from './Board.js';
import {initialiseChessBoard} from '../helpers/intialise-chess'

export default function Game(){
  return(
      <div className="game-board">
  <Board 
  squares = {initialiseChessBoard()}
  onClick = {(i) => this.handleClick(i)}
  />
</div>)
}
