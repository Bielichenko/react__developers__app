import React from 'react';
import Media from 'react-media';
import { DesktopVersion } from './components/DesktopComponents/DesktopVersion';
import { MobileVersion } from './components/MobileComponents/MobileVersion';

import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Media query="(min-width: 1001px)">
        <DesktopVersion />
      </Media>
      <Media query="(max-width: 1000px)">
        <MobileVersion />
      </Media>
    </div>
  );
};
