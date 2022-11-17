import React from 'react';

import { HeaderImage } from '../HeaderImage/HeaderImage';
import { HeaderOrderLink } from '../HeaderOrderLink/HeaderOrderLink';

import './HeaderMain.scss';

export const HeaderMain = () => {
  return (
    <div className="headerMain">
      <HeaderOrderLink />
      <HeaderImage />
    </div>
  );
};
