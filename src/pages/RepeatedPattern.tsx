import React, {useState, useEffect} from 'react';
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

const RepeatedPattern = () => {
  const [dimensions, setDimensions] = useState({w: 8, h: 6});
  const [matrix, setMatrix] = useState(
    gridWithPattern(dimensions.w, dimensions.h, pattern)
  );
  useEffect(() => {
    setMatrix(gridWithPattern(dimensions.w, dimensions.h, pattern));
  }, [dimensions]);
  return (
    <Page title="Repeated pattern">
      Pattern: <Board matrix={pattern} />
      <ChangeDimensions dimensions={dimensions} setDimensions={setDimensions} />
      <br />
      Repeated pattern: <Board matrix={matrix} />
    </Page>
  );
};

type ChangeDimensionsTypes = {
  dimensions: {
    w: number;
    h: number;
  };
  setDimensions: (props: {w: number; h: number}) => void;
};

const ChangeDimensions = (props: ChangeDimensionsTypes) => (
  <div>
    Rows:{' '}
    <input
      type="number"
      value={props.dimensions.w}
      onChange={(e) =>
        props.setDimensions({
          w: parseInt(e.currentTarget.value, 10),
          h: props.dimensions.h,
        })
      }
    />
    - Rows:{' '}
    <input
      type="number"
      value={props.dimensions.h}
      onChange={(e) =>
        props.setDimensions({
          w: props.dimensions.w,
          h: parseInt(e.currentTarget.value, 10),
        })
      }
    />
  </div>
);

export default RepeatedPattern;
