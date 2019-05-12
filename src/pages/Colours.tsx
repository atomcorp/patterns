import React from 'react';
import {Page, Board, Cell} from '../components';
import {returnColourCell} from '../components/Cell/methods';

type MatrixType = any[][];

const options = {
  upLight: ['brl', 'bll'],
  downLight: ['trl', 'tll'],
  upDark: ['brd', 'bld'],
  downDark: ['trd', 'tld'],
};

const matrixBase = [
  ['brl', 'bll', ' ', 'trd', 'tld', 'brd', 'bld', ' ', 'tld'],
  [' ', options.upLight, options.downDark, options.upDark, options.downLight],
];

const returnMatrix = (matrix: MatrixType) =>
  matrix.map((row) =>
    row.reduce((acc: JSX.Element[], item) => {
      if (Array.isArray(item)) {
        const items = item.map((nItem) => returnColourCell(nItem));
        return [...acc, ...items];
      }
      return [...acc, returnColourCell(item)];
    }, [])
  );

const Colours = () => (
  <Page title="Colours">
    <Board color="#0bb37a" matrix={returnMatrix(matrixBase)} />
  </Page>
);

export default Colours;
