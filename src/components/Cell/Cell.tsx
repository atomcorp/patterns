import React from 'react';
import css from './Cell.module.css';

type CellType = {
  color: string;
  direction: 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'blank';
};

const Cell = (props: CellType) => (
  <div
    className={`${css.cell} ${css[props.direction]}`}
    style={{
      background: props.color,
    }}
  />
);

export default Cell;
