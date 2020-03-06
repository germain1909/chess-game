import {makePiece} from './Piece.js';
import React from 'react';

export class Rook{
  constructor(player){
    this.player = player;
    this.pieceInfo = makePiece(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
  }
  isMovePossible = (src, dest) =>{
        let mod = src % 8;
        let diff = 8 - mod;
        return (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
      }
    
     /**
   * always returns empty array because of jumping
   * @return {[]}
   */
    getSrcToDestPath = (src, dest) => {
        return [];
      }
}
