import React from 'react';

import './LogoComponentM.scss';

export const LogoComponentM = () => {
  return (
    <div className="logoM">
      <div className="logoM__item logoM__item--left">
        <img
          src="media/logoImages/arrow--left.png"
          alt="logo"
          className="logoM__item__arrow logoM__item__arrow--left"
        />
      </div>

      <div className="logoM__item logoM__item--right">
        <img
          src="media/logoImages/arrow--right.png"
          alt="logo"
          className="logoM__item__arrow logoM__arrow--right"
        />
      </div>

      <p className="logoM__title">Developers</p>
    </div>
  );
};
