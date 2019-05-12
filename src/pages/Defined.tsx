import React from 'react';
import {Page, Board, returnCell} from '../components';

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

const matrixBaseStyles3 = [[]];

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
