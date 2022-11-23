/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { DevelopmentStagesComponent } from './components/DevelopmentStagesComponent/DevelopmentStagesComponent';
import { ExamplesComponent } from './components/ExamplesComponent/ExamplesComponent';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { MoreInfoComponent } from './components/MoreInfoComponent/MoreInfoComponent';
import { ServicesListComponent } from './components/ServicesListComponent/ServicesListComponent';
import { OrderComponent } from './components/OrderComponent/OrderComponent';

import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      {/* <HeaderComponent />
      <ServicesListComponent />
      <DevelopmentStagesComponent />
      <ExamplesComponent />
      <MoreInfoComponent />
      <OrderComponent /> */}
      <FooterComponent />
    </div>
  );
};
