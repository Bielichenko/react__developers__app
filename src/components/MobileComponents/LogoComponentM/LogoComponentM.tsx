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

      <div className="logoM__titleContainer">
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/d.png" alt="dd" />
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/e.png" alt="dd" />
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/v.png" alt="dd" />
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/e.png" alt="dd" />
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/l.png" alt="dd" />
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/o.png" alt="dd" />
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/p.png" alt="dd" />
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/e.png" alt="dd" />
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/r.png" alt="dd" />
        <img className="logoM__titleContainer__letter" src="media/logoImages/logoTitle/s.png" alt="dd" />
      </div>
    </div>
  );
};
