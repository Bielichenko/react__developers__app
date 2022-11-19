import React from 'react';

import { HeaderNav } from './HeaderNav/HeaderNav';

import './HeaderComponent.scss';
import { HeaderIntro } from './HeaderIntro/HeaderIntro';

export const HeaderComponent = () => {
  return (
    <div className="header">
      <HeaderNav />
      <HeaderIntro />
    </div>
  );
};
