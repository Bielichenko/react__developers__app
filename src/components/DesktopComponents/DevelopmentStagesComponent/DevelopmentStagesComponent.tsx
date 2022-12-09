import React from 'react';
import { Carousel } from './StageCarousel/Carousel';

import './DevelopmentStagesComponent.scss';

export const DevelopmentStagesComponent = () => {
  return (
    <div className="developmentStages" id="stages">
      <div className="developmentStages__limitContainer">
        <h2 className="developmentStages__title">
          Этапы разработки интернет-магазина
        </h2>
        <div className="developmentStages__corousel">
          <Carousel />
        </div>
        <img className="developmentStages__image developmentStages__image--sphere" src="media/stagesImages/sphere.png" alt="" />
        <img className="developmentStages__image developmentStages__image--wave" src="media/stagesImages/wave.png" alt="" />
      </div>
    </div>
  );
};
