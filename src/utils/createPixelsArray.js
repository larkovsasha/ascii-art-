export const createPixelsArray = (imageData) => {
  const pixels = [];
  for (let i = 0; i < imageData.length; i += 4) {
    const pixel = `${imageData[i]} ${imageData[i + 1]} ${imageData[i + 2]}`;
    pixels.push(pixel);
  }
  return pixels;
};
