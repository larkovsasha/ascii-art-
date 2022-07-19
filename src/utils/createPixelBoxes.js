// break the canvas into pixel rects
export const createPixelBoxes = (pixelsArray, sizes, charsDensity) => {
  const { cw, ch } = sizes;
  const createPixelBox = returnCreatePixelBox(pixelsArray, cw, ch);
  const pixelBoxes = [];
  for (let y = 0; y < ch; y += charsDensity) {
    for (let x = 0; x < cw; x += charsDensity) {
      const coords = {
        xStart: x,
        yStart: y,
        xEnd: x + charsDensity,
        yEnd: y + charsDensity,
      };
      pixelBoxes.push(createPixelBox(coords));
    }
  }
  return pixelBoxes;
};

const returnCreatePixelBox = (pixels, cw, ch) => {
  // creates an array of pixels in a specific rect of the canvas
  return (coords) => {
    const { xStart, yStart, xEnd, yEnd } = coords;
    const pixelBox = [];
    for (let yBox = yStart; yBox < Math.min(ch, yEnd); yBox++) {
      for (let xBox = xStart; xBox < Math.min(cw, xEnd); xBox++) {
        pixelBox.push(pixels[yBox * cw + xBox]);
      }
    }
    return pixelBox;
  };
};
