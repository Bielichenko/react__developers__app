/* eslint-disable react/button-has-type */
/* eslint-disable brace-style */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Media from 'react-media';

import { DevelopmentStagesComponentM } from './DevelopmentStagesComponent/DevelopmentStagesComponentM';
import { ExamplesComponentM } from './ExamplesComponent/ExamplesComponentM';
import { FooterComponent } from './FooterComponent/FooterComponent';
import { HeaderComponentM } from './HeaderComponent/HeaderComponentM';
import { MoreInfoComponent } from './MoreInfoComponent/MoreInfoComponent';
import { ServicesListComponentM } from './ServicesListComponent/ServicesListComponentM';
import { OrderComponent } from './OrderComponent/OrderComponent';

export const MobileVersion = () => {
  return (
    <div className="mobileVersion">
      <HeaderComponentM />
      <ServicesListComponentM />
      <DevelopmentStagesComponentM />
      <ExamplesComponentM />
      {/* <MoreInfoComponent />
      <OrderComponent />
      <FooterComponent /> */}
    </div>
  );
};
