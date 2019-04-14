import React, {useState} from 'react';
import {Board, Page} from '../components';

type LengthType = {row: number; col: number};

const Tile = ({color}: {color: string}) => (
  <div style={{width: '24px', height: '24px', background: color}} />
);

const RedTile = <Tile color="red" />;
const BlueTile = <Tile color="blue" />;

const tileOptions = [RedTile, BlueTile];
const animals = [
  [<div>🐶</div>, <div>🐶</div>],
  [<div>🦊</div>, <div>🦊</div>],
  [<div>🐷</div>, <div>🐷</div>],
];
const randomTile = () => tileOptions[Math.floor(Math.random() * 2)];
const randomAnimals = () => animals[Math.floor(Math.random() * animals.length)];
const gridWithPattern = (
  x: number,
  y: number,
  patternGenerator: ({}: LengthType) => JSX.Element[][]
) => {
  return Array(y)
    .fill(null)
    .map((_, rowIndex) =>
      Array(x)
        .fill(null)
        .map((_, colIndex) => {
          const pattern = patternGenerator({row: rowIndex, col: colIndex});
          const patternRowLength = pattern.length;
          const patternColLength = pattern[0].length;
          return pattern[rowIndex % patternRowLength][
            colIndex % patternColLength
          ];
        })
    );
};

const shouldRefreshMatrix = (grid: LengthType, matrix: LengthType) => {
  // first cell in a row
  if (grid.col === 0) {
    return true;
  }
  // end of pattern
  if (
    Number.isInteger(grid.col / matrix.col) &&
    Number.isInteger(grid.row / matrix.row)
  ) {
    return true;
  }
  return false;
};

const initPattern = () => {
  const matrixLength = {
    row: 1,
    col: 2,
  };
  let matrix = [randomAnimals()];
  return (grid: {row: number; col: number}) => {
    if (shouldRefreshMatrix(grid, matrixLength)) {
      matrix = [randomAnimals()];
    }
    return matrix;
  };
};

const getPattern = initPattern();

const ElementTiles = () => {
  const [matrix, setMatrix] = useState(gridWithPattern(8, 6, getPattern));
  return (
    <Page title="Element titles">
      <Board matrix={matrix} />
      <button
        onClick={() => {
          setMatrix(
            gridWithPattern(8, 6, getPattern)
          );
        }}
      >
        Random
      </button>
    </Page>
  );
};

export default ElementTiles;
