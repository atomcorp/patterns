import React, {useState} from 'react';
import {Page, Board} from '../../components';
import Chevron from './ChevronShape';

const red = (key: string) => <Chevron key={key} color="red" />;
const blue = (key: string) => <Chevron key={key} color="blue" />;

type GetChev = {
  x: number;
  y: number;
  colIndex: number;
  rowIndex: number;
};

const isFirstRowHalf = (option: GetChev) => option.colIndex + 1 <= option.x / 2;
const isFirstColHalfHelper = (option: GetChev) =>
  option.rowIndex + 1 <= option.y / 2;

const getChevron = (option: GetChev) => {
  const key = `${option.colIndex}${option.rowIndex}`;
  isFirstRowHalf(option);
  isFirstColHalfHelper(option);
  if (
    (isFirstRowHalf(option) && !isFirstColHalfHelper(option)) ||
    (!isFirstRowHalf(option) && isFirstColHalfHelper(option))
  ) {
    return blue(key);
  }
  return red(key);
};

const returnMatrix = (x: number, y: number) => {
  return Array(y)
    .fill(null)
    .map((_, rowIndex) =>
      Array(x)
        .fill(null)
        .map((_, colIndex) => getChevron({x, y, rowIndex, colIndex}))
    );
};

const Chevrons = () => {
  const [matrix, setMatrix] = useState(returnMatrix(16, 16));
  return (
    <Page title="Anni Albers - GR I, 1970">
      <Board matrix={matrix} />
      <button onClick={() => setMatrix(returnMatrix(16, 16))}>Refresh</button>
      <br />
      <a href="https://www.bonhams.com/auctions/25275/lot/90/">Original</a>
    </Page>
  );
};

export default Chevrons;
