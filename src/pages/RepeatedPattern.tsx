import React from 'react';
import {Page, Board} from '../components';

const pattern = [['🦕', '🦖'], ['🦖', '🦕']];

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

const matrix = gridWithPattern(8, 6, pattern);

const RepeatedPattern = () => (
  <Page title="Repeated pattern">
    Pattern:
    <Board matrix={pattern} />
    <br />
    Repeated pattern:
    <Board matrix={matrix} />
  </Page>
);

export default RepeatedPattern;
