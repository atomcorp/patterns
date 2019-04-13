import React, {useState, useEffect} from 'react';
import {Page, Board} from '../components';

const arrows = ['🔺', '🔻'];

const randomArrow = () => arrows[Math.floor(Math.random() * 2)];

const newPattern = () => [
  [randomArrow(), randomArrow()],
  [randomArrow(), randomArrow()],
];

const gridWithPattern = (x: number, y: number, pattern: string[][]) => {
  const patternRowLength = pattern.length;
  const patternColLength = pattern[0].length;
  return Array(y)
    .fill(null)
    .map((_, rowIndex) =>
      Array(x)
        .fill(null)
        .map(
          (_, colIndex) =>
            pattern[rowIndex % patternRowLength][colIndex % patternColLength]
        )
    );
};

const RandomTiles = () => {
  const [pattern, setPattern] = useState(newPattern());
  const [matrix, setMatrix] = useState(gridWithPattern(8, 6, pattern));
  useEffect(() => {
    setMatrix(gridWithPattern(8, 6, pattern));
  }, [pattern]);
  return (
    <Page title="Random tile">
      Tile: <Board matrix={pattern} />
      <br />
      Repeated pattern: <Board matrix={matrix} />
      <button onClick={() => setPattern(newPattern())}>Random</button>
    </Page>
  );
};

export default RandomTiles;
