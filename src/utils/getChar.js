import { floorDivideMapper } from './floorDivideMapper';
import { chars } from '../constants/chars';
import { DIVIDER } from '../constants/constants';

export const getChar = (averageRGB) => {
  const [r, g, b] = averageRGB.map(floorDivideMapper(DIVIDER));
  return chars[r][g][b];
};
