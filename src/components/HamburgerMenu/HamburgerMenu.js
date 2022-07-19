import './HamburgerMenu.scss';
import { Hamburger } from '../Hamburger';
import { useRef, useState } from 'react';
import classNames from 'classnames';

export const HamburgerMenu = ({ onSettingsApply }) => {
  const [hamburgerVisible, setHamburgerVisible] = useState(false);

  const handleToggle = () => {
    setHamburgerVisible((prevState) => !prevState);
  };

  const charsDensityRef = useRef(null);
  const fontSizeRef = useRef(null);

  return (
    <div className="HamburgerMenu">
      <Hamburger
        className={'HamburgerMenu__Hamburger'}
        isActive={hamburgerVisible}
        onClick={handleToggle}
        color={'white'}
      />
      <div
        className={classNames('HamburgerMenu__Menu', {
          'HamburgerMenu__Menu-active': hamburgerVisible,
        })}
      >
        <div className="HamburgerMenu__SettingField">
          <input
            type="number"
            min={2}
            max={25}
            defaultValue={4}
            ref={fontSizeRef}
          />
          FontSize
        </div>
        <div className="HamburgerMenu__SettingField">
          <input
            type="number"
            min={2}
            max={25}
            defaultValue={4}
            ref={charsDensityRef}
          />
          Density
        </div>
        <button
          onClick={() =>
            onSettingsApply({
              fontSize: +fontSizeRef.current.value,
              charsDensity: +charsDensityRef.current.value,
            })
          }
        >
          generate
        </button>
      </div>
    </div>
  );
};
