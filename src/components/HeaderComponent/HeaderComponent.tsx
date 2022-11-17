import React from 'react';

import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderMain } from './HeaderMain/HeaderMain';
import { HeaderNav } from './HeaderNav/HeaderNav';

import './HeaderComponent.scss';

export const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header__top">
        <HeaderLogo />
        <HeaderNav />
      </div>
      <HeaderMain />
    </div>
  );
};
