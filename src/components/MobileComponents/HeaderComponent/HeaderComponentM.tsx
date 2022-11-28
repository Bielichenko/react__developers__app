import React, { useState } from 'react';

import { HeaderNavM } from './HeaderNavM/HeaderNavM';

import './HeaderComponentM.scss';
import { HeaderIntroM } from './HeaderIntroM/HeaderIntroM';

export const HeaderComponentM = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="header">
      <HeaderNavM setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened} />
      <HeaderIntroM isMenuOpened={isMenuOpened} />
    </div>
  );
};
