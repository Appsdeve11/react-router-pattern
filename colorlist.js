import React from 'react';
import { Link } from 'react-router-dom';

const ColorsList = () => {
  const colors = ['red', 'blue', 'green', 'yellow'];

  return (
    <div>
      <h1>Colors List</h1>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add New Color</Link>
    </div>
  );
};

export default ColorsList;