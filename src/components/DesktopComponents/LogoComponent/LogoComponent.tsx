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

      <p className="logo__title">Developers</p>
    </div>
  );
};
