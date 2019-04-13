import React, {useState} from 'react';
import {Board, Page} from '../components';

const randomDinosaur = () => (Math.random() > 0.5 ? '🦕' : '🦖');

const randomGrid = (x: number, y: number) =>
  Array(y)
    .fill(null)
    .map(() =>
      Array(x)
        .fill(null)
        .map(() => randomDinosaur())
    );

const Basic = () => {
  const [matrix, setMatrix] = useState(randomGrid(4, 6));
  return (
    <Page title="Basic">
      <Board matrix={matrix} />
      <button onClick={() => setMatrix(randomGrid(4, 6))}>Random dino</button>
    </Page>
  );
};

export default Basic;
