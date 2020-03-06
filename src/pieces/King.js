import {makePiece} from './Piece.js';
import React from 'react';

export class King {

  constructor(player){
    this.player = player;
    this.pieceInfo = makePiece(player,(player===1?"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
  }
  isMovePossible = (src, dest) => {
        return (src - 9 === dest || 
          src - 8 === dest || 
          src - 7 === dest || 
          src + 1 === dest || 
          src + 9 === dest || 
          src + 8 === dest || 
          src + 7 === dest || 
          src - 1 === dest);
      }

    getSrcToDestPath = (src, dest) =>{
        return [];
      }

}