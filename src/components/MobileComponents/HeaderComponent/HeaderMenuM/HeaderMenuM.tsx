/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { LogoComponentM } from '../../LogoComponentM/LogoComponentM';
import './HeaderMenuM.scss';

interface props {
  isMenuOpened: boolean;
}

export const HeaderMenuM: React.FC<props> = ({ isMenuOpened }) => {
  return (
    <div className={cn({ headerMobMenu: true, 'headerMobMenu--opened': isMenuOpened })}>
      <nav className="headerMobMenu__links">
        <a href="#services" className="headerMobMenu__links__link">Услуги</a>
        <a href="#portfolio" className="headerMobMenu__links__link">Портфолио</a>
        <a href="#stages" className="headerMobMenu__links__link">Этапы</a>
        <a href="#footer" className="headerMobMenu__links__link">Дизайнеры</a>
      </nav>
    </div>
  );
};
