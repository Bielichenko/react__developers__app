/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { CarouselM } from './StageCarouselM/CarouselM';
// import Carousel from 'react-bootstrap/Carousel';

import './DevelopmentStagesComponentM.scss';

export const DevelopmentStagesComponentM = () => {
  return (
    <div className="developmentStagesM" id="stages">
      <h2 className="developmentStagesM__title">
        Этапы разработки интернет-магазина
      </h2>
      <CarouselM />
      <img className="developmentStagesM__image developmentStagesM__image--sphere" src="media/stagesImages/sphere.png" alt="" />
    </div>
  );
};
