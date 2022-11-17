import React from 'react';

import './HeaderLogo.scss';

export const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <img src="media/headerLogo/logo--left.png" alt="logo" className="nav__item" />
      <img src="media/headerLogo/backLogo-left.png" alt="logo" className="nav__item" />
      <img src="media/headerLogo/logo--right.png" alt="logo" className="nav__item" />
      <img src="media/headerLogo/backLogo-right.png" alt="logo" className="nav__item" />
      <p className="header__title">DEVELOPERS</p>
    </div>
  );
};
