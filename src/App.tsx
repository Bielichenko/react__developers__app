/* eslint-disable react/button-has-type */
/* eslint-disable brace-style */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Media from 'react-media';
import { DesktopVersion } from './components/DesktopComponents/DesktopVersion';

import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Media query="(min-width: 1500px)">
        <DesktopVersion />
      </Media>
    </div>
  );
};
