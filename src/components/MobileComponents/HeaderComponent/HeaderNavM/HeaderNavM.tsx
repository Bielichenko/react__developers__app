import React from 'react';
import { LogoComponentM } from '../../LogoComponentM/LogoComponentM';

import './HeaderNavM.scss';

interface props {
  isMenuOpened: boolean;
  setIsMenuOpened: (bolean: boolean) => void;
}

export const HeaderNavM: React.FC<props> = ({ isMenuOpened, setIsMenuOpened }) => {
  return (
    <div className="headerNavM">
      <div className="headerNavM__logo">
        <LogoComponentM />
      </div>

      <div
        role="button"
        className="headerNavM__mobileMenuOpener"
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        onKeyUp={() => setIsMenuOpened(!isMenuOpened)}
        tabIndex={0}
      >
        <div className="headerNavM__mobileMenuOpener__elipse"></div>
        <div className="headerNavM__mobileMenuOpener__elipse"></div>
        <div className="headerNavM__mobileMenuOpener__elipse"></div>
      </div>
    </div>
  );
};
