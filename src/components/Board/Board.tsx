import React from 'react';

type BoardType = {
  matrix: any[][];
};

const Board = (props: BoardType) => (
  <section>
    {props.matrix.map((columns, i) => (
      <div style={{display: 'flex'}} key={i}>{columns.map((cell) => cell)}</div>
    ))}
  </section>
);

export default Board;
