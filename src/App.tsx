/* eslint-disable react/button-has-type */
/* eslint-disable brace-style */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Media from 'react-media';
import { DesktopVersion } from './components/DesktopComponents/DesktopVersion';

import './App.scss';
import { MobileVersion } from './components/MobileComponents/MobileVersion';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Media query="(min-width: 500px)">
        <DesktopVersion />
      </Media>
      {/* <Media query="(max-width: 1350px)">
        <MobileVersion />
      </Media> */}
    </div>
  );
};
