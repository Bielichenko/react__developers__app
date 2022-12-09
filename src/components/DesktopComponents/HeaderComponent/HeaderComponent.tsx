import React from 'react';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { HeaderIntro } from './HeaderIntro/HeaderIntro';

import './HeaderComponent.scss';

export const HeaderComponent = () => {
  return (
    <div className="header">
      <HeaderNav />
      <HeaderIntro />
    </div>
  );
};
