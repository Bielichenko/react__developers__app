import React from 'react';
import { DevelopmentStagesComponent } from './DevelopmentStagesComponent/DevelopmentStagesComponent';
import { ExamplesComponent } from './ExamplesComponent/ExamplesComponent';
import { FooterComponent } from './FooterComponent/FooterComponent';
import { HeaderComponent } from './HeaderComponent/HeaderComponent';
import { MoreInfoComponent } from './MoreInfoComponent/MoreInfoComponent';
import { ServicesListComponent } from './ServicesListComponent/ServicesListComponent';
import { OrderComponent } from './OrderComponent/OrderComponent';

export const DesktopVersion = () => {
  return (
    <div className="components--desktop">
      <HeaderComponent />
      <ServicesListComponent />
      <DevelopmentStagesComponent />
      <ExamplesComponent />
      <MoreInfoComponent />
      <OrderComponent />
      <FooterComponent />
    </div>
  );
};
