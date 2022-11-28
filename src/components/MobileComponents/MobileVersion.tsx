/* eslint-disable react/button-has-type */
/* eslint-disable brace-style */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Media from 'react-media';

import { DevelopmentStagesComponent } from './DevelopmentStagesComponent/DevelopmentStagesComponent';
import { ExamplesComponent } from './ExamplesComponent/ExamplesComponent';
import { FooterComponent } from './FooterComponent/FooterComponent';
import { HeaderComponent } from './HeaderComponent/HeaderComponent';
import { MoreInfoComponent } from './MoreInfoComponent/MoreInfoComponent';
import { ServicesListComponent } from './ServicesListComponent/ServicesListComponent';
import { OrderComponent } from './OrderComponent/OrderComponent';

export const MobileVersion = () => {
  return (
    <div className="mobileVersion">
      <HeaderComponent />
      {/* <ServicesListComponent />
      <DevelopmentStagesComponent />
      <ExamplesComponent />
      <MoreInfoComponent />
      <OrderComponent />
      <FooterComponent /> */}
    </div>
  );
};
