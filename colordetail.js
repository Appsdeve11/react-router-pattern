import React from 'react';
import { useParams } from 'react-router-dom';

const ColorDetail = () => {
  const { color } = useParams();

  return (
    <div>
      <h1>Color Detail</h1>
      <h2>{color}</h2>
      <div
        style={{
          backgroundColor: color,
          width: '200px',
          height: '200px',
          border: '1px solid black',
        }}
      ></div>
    </div>
  );
};

export default ColorDetail;