import {
  MAX_BOUNDARY,
  MIN_BOUNDARY,
} from '@components/BezierCurveGraph/constants';
import useSwatches from '@hooks/useSwatches';
import Point from '../Point';

function CurvePoints() {
  const { swatchCoordinates: swatch, hue } = useSwatches();

  swatch.shift();
  swatch.pop();

  return (
    <g>
      {swatch.map((color) => (
        <Point
          key={`${color.x},${color.y}`}
          hue={hue}
          type="colorPoint"
          x={color.x}
          y={color.y}
          minBoundary={MIN_BOUNDARY}
          maxBoundary={MAX_BOUNDARY}
          isNonControlPoint
        />
      ))}
    </g>
  );
}

export default CurvePoints;
