import React from 'react';
import {Page, Board} from '../../components';
import css from './Defined.module.css';

type CellType = {
  color: string;
  direction: 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'blank';
};

const Cell = (props: CellType) => (
  <div
    className={`${css.cell} ${css[props.direction]}`}
    style={{
      background: 'white',
    }}
  />
);

// const triangle = {};

const returnCell = (style: number) => {
  switch (style) {
    case 1:
      return <Cell direction="topLeft" color="red" />;
    case 2:
      return <Cell direction="topRight" color="red" />;
    case 3:
      return <Cell direction="bottomRight" color="blue" />;
    case 4:
      return <Cell direction="bottomLeft" color="blue" />;
    default:
      return <Cell direction="blank" color="yellow" />;
  }
};

type MatrixType = number[][];

const matrixBaseStyles = [
  [1, 2, 3, 4, 1, 2, 3, 4],
  [3, 4, 1, 2, 3, 4, 1, 2],
  [1, 2, 3, 4, 1, 2, 3, 4],
  [3, 4, 1, 2, 3, 4, 1, 2],
  [1, 2, 3, 4, 1, 2, 3, 4],
  [3, 4, 1, 2, 3, 4, 1, 2],
  [1, 2, 3, 4, 1, 2, 3, 4],
  [3, 4, 1, 2, 3, 4, 1, 2],
];

const matrixBaseStyles2 = [
  [3, 4, 0, 0, 3, 4, 0, 0],
  [0, 0, 2, 1, 0, 0, 2, 1],
  [3, 4, 0, 0, 3, 4, 0, 0],
  [0, 0, 2, 1, 0, 0, 2, 1],
];

const returnMatrix = (matrix: MatrixType) =>
  matrix.map((row) => row.map((int) => returnCell(int)));

const conver2dArrayToString = (matrix: MatrixType) => (
  <pre>
    [<br />
    {matrix.map((row) => `  [${row.toString()}],\n`)}]
  </pre>
);

const Defined = () => (
  <Page title="Defined">
    1:
    <Board matrix={returnMatrix(matrixBaseStyles)} />
    <br />
    2:
    <Board matrix={returnMatrix(matrixBaseStyles2)} />
    <br /> <hr />
    1:
    {conver2dArrayToString(matrixBaseStyles)}
    2:
    {conver2dArrayToString(matrixBaseStyles2)}
  </Page>
);

export default Defined;
