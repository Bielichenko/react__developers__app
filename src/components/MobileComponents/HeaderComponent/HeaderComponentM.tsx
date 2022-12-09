import React, { useState } from 'react';
import { HeaderNavM } from './HeaderNavM/HeaderNavM';
import { HeaderIntroM } from './HeaderIntroM/HeaderIntroM';

import './HeaderComponentM.scss';

export const HeaderComponentM = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="header">
      <HeaderNavM setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened} />
      <HeaderIntroM isMenuOpened={isMenuOpened} />
    </div>
  );
};
