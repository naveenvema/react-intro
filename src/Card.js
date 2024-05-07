// src/Card.js

import React from 'react';
import './Card.css';

function Cards({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default Cards;
