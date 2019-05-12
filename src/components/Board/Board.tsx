import React from 'react';
import css from './Board.module.css';

type BoardType = {
  matrix: any[][];
  color?: string;
};

const Board = (props: BoardType) => (
  <section>
    {props.matrix.map((columns, i) => (
      <div className={css.row} style={{background: props.color}} key={i}>
        {columns.map((cell) => cell)}
      </div>
    ))}
  </section>
);

export default Board;
