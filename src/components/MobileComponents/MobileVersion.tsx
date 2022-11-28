/* eslint-disable react/button-has-type */
/* eslint-disable brace-style */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Media from 'react-media';

import { DevelopmentStagesComponent } from './DevelopmentStagesComponent/DevelopmentStagesComponent';
import { ExamplesComponent } from './ExamplesComponent/ExamplesComponent';
import { FooterComponent } from './FooterComponent/FooterComponent';
import { HeaderComponentM } from './HeaderComponent/HeaderComponentM';
import { MoreInfoComponent } from './MoreInfoComponent/MoreInfoComponent';
import { ServicesListComponentM } from './ServicesListComponent/ServicesListComponentM';
import { OrderComponent } from './OrderComponent/OrderComponent';

export const MobileVersion = () => {
  return (
    <div className="mobileVersion">
      {/* <HeaderComponentM /> */}
      <ServicesListComponentM />
      {/* <DevelopmentStagesComponent />
      <ExamplesComponent />
      <MoreInfoComponent />
      <OrderComponent />
      <FooterComponent /> */}
    </div>
  );
};
