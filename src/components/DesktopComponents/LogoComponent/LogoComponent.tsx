import React from 'react';

import './LogoComponent.scss';

export const LogoComponent = () => {
  return (
    <div className="logo">
      <div className="logo__item logo__item--left">
        <img
          src="media/logoImages/arrow--left.png"
          alt="logo"
          className="logo__item__arrow logo__item__arrow--left"
        />
      </div>

      <div className="logo__item logo__item--right">
        <img
          src="media/logoImages/arrow--right.png"
          alt="logo"
          className="logo__arrow logo__arrow--right"
        />
      </div>

      <div className="logo__titleContainer">
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/d.png" alt="dd" />
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/e.png" alt="dd" />
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/v.png" alt="dd" />
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/e.png" alt="dd" />
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/l.png" alt="dd" />
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/o.png" alt="dd" />
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/p.png" alt="dd" />
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/e.png" alt="dd" />
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/r.png" alt="dd" />
        <img className="logo__titleContainer__letter" src="media/logoImages/logoTitle/s.png" alt="dd" />
      </div>
    </div>
  );
};
