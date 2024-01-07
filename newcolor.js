import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewColorForm = () => {
  const [color, setColor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = color; 
    const updatedColors = [...colors, newColor];
    setColors(updatedColors); 
    history.push('/colors');
  };

  return (
    <div>
      <h1>New Color Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;