import { floorDivideMapper } from './floorDivideMapper';
import { DIVIDER } from '../constants/constants';

// calc the average rgb value in a specific cell of pixel array
export const calcAverageRGB = (pixelBox) => {
  const length = pixelBox.length ? pixelBox.length : 1;
  let [r, g, b] = [0, 0, 0];
  pixelBox.forEach((pixel) => {
    const [pr, pg, pb] = pixel.split(' ');
    r += +pr;
    g += +pg;
    b += +pb;
  });
  return [r, g, b].map(floorDivideMapper(length));
};
