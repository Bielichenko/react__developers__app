/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './HeaderNav.scss';

export const HeaderNav = () => {
  return (
    <nav className="header__nav">
      <a href="#services">Услуги</a>
      <a href="#page-1">Портфолио</a>
      <a href="#page-1">Этапы</a>
      <a href="#page-1">Дизайнеры</a>
      <a href="#order">Заказать</a>
    </nav>
  );
};
