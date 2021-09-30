import React from 'react';
import '../index.css';

export function Square(props) {
    return (
      <div>
       <button className={"square " + props.shade}
                onClick={props.onClick}
                style={props.style}>
        </button>
      </div>  
    );
  
}