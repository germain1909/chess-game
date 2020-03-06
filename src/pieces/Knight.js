import {makePiece} from './Piece.js';
import React from 'react';

export class Knight{
  constructor(player){
    this.player = player;
    this.pieceInfo = makePiece(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
  }
   isMovePossible = (src, dest) =>{
        return (src - 17 === dest || 
            src - 10 === dest || 
            src + 6 === dest || 
            src + 15 === dest || 
            src - 15 === dest || 
            src - 6 === dest || 
            src + 10 === dest || 
            src + 17 === dest);
      }
    
     /**
   * always returns empty array because of jumping
   * @return {[]}
   */
  getSrcToDestPath = (src, dest) => {
        return [];
      }
}
