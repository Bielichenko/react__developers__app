import React from 'react';
import { CarouselM } from './StageCarouselM/CarouselM';

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
