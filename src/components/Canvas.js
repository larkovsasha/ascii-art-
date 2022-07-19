import { useEffect, useMemo, useRef } from 'react';
import { createPixelBoxes } from '../utils/createPixelBoxes';
import { getChar } from '../utils/getChar';
import { calcAverageRGB } from '../utils/calcAverageRGB';

export const Canvas = ({ pixels, size, fontSize, charsDensity }) => {
  const canvasRef = useRef(null);

  const [averagePixelBoxes, isLoading] = useMemo(() => {
    if (!pixels.length || !canvasRef.current) return [[], true];

    const pixelBoxes = createPixelBoxes(pixels, size, charsDensity);
    const averagePixelBoxes = pixelBoxes.map(calcAverageRGB);
    return [averagePixelBoxes, false];
  }, [pixels, fontSize, charsDensity]);

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');

    if (isLoading) {
      context.font = '90px Monaco';
      context.fillText('Loading', 0, 100);
    } else {
      const { cw, ch } = size;
      canvasRef.current.width = cw;
      canvasRef.current.height = ch;
      context.clearRect(0, 0, cw, ch);
      for (let y = 0; y < Math.ceil(ch / charsDensity); y++) {
        for (let x = 0; x < Math.ceil(cw / charsDensity); x++) {
          context.font = `${fontSize}px sans-serif`;
          const averagePixelBlock =
            averagePixelBoxes[y * Math.ceil(cw / charsDensity) + x];
          const [r, g, b] = averagePixelBlock;
          const char = getChar(averagePixelBlock);
          context.fillStyle = `rgba(${r},${g},${b})`;
          context.fillText(char, x * charsDensity, y * charsDensity);
        }
      }
    }
  }, [pixels, fontSize, charsDensity]);

  return (
    <canvas
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
        boxSizing: 'border-box',
        display: 'block',
      }}
      ref={canvasRef}
    />
  );
};
