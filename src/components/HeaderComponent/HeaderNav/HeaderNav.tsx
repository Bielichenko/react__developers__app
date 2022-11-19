/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { LogoComponent } from '../../LogoComponent/LogoComponent';

import './HeaderNav.scss';

export const HeaderNav = () => {
  return (
    <div className="headerNav">
      <div className="headerNav__logo">
        <LogoComponent />
      </div>
      <nav className="headerNav__links">
        <a href="#services" className="headerNav__links__link">Услуги</a>
        <a href="#portfolio" className="headerNav__links__link">Портфолио</a>
        <a href="#stages" className="headerNav__links__link">Этапы</a>
        <a href="#footer" className="headerNav__links__link">Дизайнеры</a>
        <a href="#order" className="headerNav__links__link headerNav__links__link--order">Заказать</a>
      </nav>
    </div>
  );
};
