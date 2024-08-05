// src/Square.js
import React from 'react';
import './styles.css'

export const Square =({value, onClick}) =>{
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

