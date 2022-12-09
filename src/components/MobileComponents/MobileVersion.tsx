import React from 'react';
import { DevelopmentStagesComponentM } from './DevelopmentStagesComponent/DevelopmentStagesComponentM';
import { ExamplesComponentM } from './ExamplesComponent/ExamplesComponentM';
import { FooterComponentM } from './FooterComponent/FooterComponentM';
import { HeaderComponentM } from './HeaderComponent/HeaderComponentM';
import { MoreInfoComponentM } from './MoreInfoComponent/MoreInfoComponentM';
import { ServicesListComponentM } from './ServicesListComponent/ServicesListComponentM';
import { OrderComponentM } from './OrderComponent/OrderComponentM';

export const MobileVersion = () => {
  return (
    <div className="mobileVersion">
      <HeaderComponentM />
      <ServicesListComponentM />
      <DevelopmentStagesComponentM />
      <ExamplesComponentM />
      <MoreInfoComponentM />
      <OrderComponentM />
      <FooterComponentM />
    </div>
  );
};
