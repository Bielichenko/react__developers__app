import React, { useState } from 'react';

import { HeaderNavM } from './HeaderNavM/HeaderNavM';

import './HeaderComponent.scss';
import { HeaderIntroM } from './HeaderIntroM/HeaderIntroM';

export const HeaderComponent = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="header">
      <HeaderNavM setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened} />
      <HeaderIntroM isMenuOpened={isMenuOpened} />
    </div>
  );
};
