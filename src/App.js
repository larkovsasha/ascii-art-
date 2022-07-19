import { useRef, useState } from 'react';
import img from './images/aGuyHavingACupOfTea.JPG';
import { useImageData } from './hooks/useImageData';
import { Canvas } from './components/Canvas';
import { createPixelsArray } from './utils/createPixelsArray';
import './App.css';
import { AppContextProvider, defaultValue } from './contexts/AppContext';
import { HamburgerMenu } from './components/HamburgerMenu';

export const App = () => {
  const imageRef = useRef(null);
  const [pixels, setPixels] = useState([]);
  const [canvasSize, setCanvasSize] = useState({ cw: 0, ch: 0 });

  const [charsDensity, setCharsDensity] = useState(6);
  const [fontSize, setFontSize] = useState(4);

  const handleImageLoad = () => {
    const imgData = useImageData(imageRef);
    const pixels = createPixelsArray(imgData);
    const [cw, ch] = [
      imageRef.current.naturalWidth,
      imageRef.current.naturalHeight,
    ];
    setCanvasSize({ cw, ch });
    setPixels(pixels);
  };

  const handleSettingsApply = (settings) => {
    const { fontSize, charsDensity } = settings;

    setCharsDensity(charsDensity);
    setFontSize(fontSize);
  };
  return (
    <AppContextProvider value={defaultValue}>
      <div className="App">
        <img
          style={{ display: 'none' }}
          src={img}
          ref={imageRef}
          onLoad={handleImageLoad}
        />
        <Canvas
          pixels={pixels}
          size={canvasSize}
          fontSize={fontSize}
          charsDensity={charsDensity}
        />
        <HamburgerMenu onSettingsApply={handleSettingsApply} />
      </div>
    </AppContextProvider>
  );
};
