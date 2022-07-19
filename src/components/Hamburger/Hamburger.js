import classNames from 'classnames';
import React from 'react';
import './Hamburger.scss';

const HamburgerColor = {
  BLACK: 'black',
  WHITE: 'white',
};

export const Hamburger = ({
  color = 'black',
  isActive,
  onClick,
  className,
}) => {
  return (
    <div className={classNames('Hamburger', className)} onClick={onClick}>
      <div
        className={classNames('Burger', {
          Burger__black: color === HamburgerColor.BLACK,
          Burger__white: color === HamburgerColor.WHITE,
          Burger__active: isActive,
        })}
      />
    </div>
  );
};
