/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { Carousel } from './StageCarousel/Carousel';
// import Carousel from 'react-bootstrap/Carousel';

import './DevelopmentStagesComponent.scss';

export const DevelopmentStagesComponent = () => {
  return (
    <div className="developmentStages" id="stages">
      <div className="developmentStages__container">
        <h2 className="developmentStages__title">
          Этапы разработки интернет-магазина
        </h2>
        <Carousel />
        <img className="developmentStages__image developmentStages__image--sphere" src="media/stagesImages/sphere.png" alt="" />
        <img className="developmentStages__image developmentStages__image--wave" src="media/stagesImages/wave.png" alt="" />
      </div>
    </div>
  );
};
