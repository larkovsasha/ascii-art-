const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

export const useImageData = (imageRef) => {
  if (!imageRef.current) {
    console.error('ImageRef is empty');
    return [];
  }
  const [cw, ch] = [
    imageRef.current.naturalWidth,
    imageRef.current.naturalHeight,
  ];

  canvas.width = cw;
  canvas.height = ch;

  context.drawImage(imageRef.current, 0, 0);
  const imageData = context.getImageData(0, 0, cw, ch).data;
  context.clearRect(0, 0, cw, ch);
  return imageData;
};
