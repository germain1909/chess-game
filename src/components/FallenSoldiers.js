import React from 'react';

import '../index.css';
import {Square} from './Square.js';
import {initialiseChessBoard} from '../helpers/intialise-chess'
import {Rook} from '../pieces/Rook';

export function FallenSoldiers(props) {

    const rook = new Rook(2);
        
    return (
        
        // <Square 
        // piece = {rook} 
        // style = {rook.pieceInfo.style}
        // shade = {'light-square'}
        // onClick={null}
        // />
        props.whiteFallensoldiers
    );
}

