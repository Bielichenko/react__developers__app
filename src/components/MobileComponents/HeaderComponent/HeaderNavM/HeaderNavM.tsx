/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { LogoComponentM } from '../../LogoComponentM/LogoComponentM';
import { HeaderMenuM } from '../HeaderMenuM/HeaderMenuM';

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
        className="headerNavM__mobileMenuOpener"
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        <div className="headerNavM__mobileMenuOpener__elipse"></div>
        <div className="headerNavM__mobileMenuOpener__elipse"></div>
        <div className="headerNavM__mobileMenuOpener__elipse"></div>
      </div>
    </div>
  );
};
