import React from 'react';
import cn from 'classnames';

import './HeaderMenuM.scss';

interface props {
  isMenuOpened: boolean;
  setIsMenuOpened: (boolean: boolean) => void;
}

export const HeaderMenuM: React.FC<props> = ({ isMenuOpened, setIsMenuOpened }) => {
  return (
    <div className={cn('headerMobMenu', { 'headerMobMenu--opened': isMenuOpened })}>
      <nav className="headerMobMenu__links">
        <a href="#services" className="headerMobMenu__links__link" onClick={() => setIsMenuOpened(false)}>Услуги</a>
        <a href="#portfolio" className="headerMobMenu__links__link" onClick={() => setIsMenuOpened(false)}>Портфолио</a>
        <a href="#stages" className="headerMobMenu__links__link" onClick={() => setIsMenuOpened(false)}>Этапы</a>
        <a href="#footer" className="headerMobMenu__links__link" onClick={() => setIsMenuOpened(false)}>Дизайнеры</a>
      </nav>
    </div>
  );
};
