/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { Carousel } from './Carousel/Carousel';
// import Carousel from 'react-bootstrap/Carousel';

import './DevelopmentStagesComponent.scss';
import { stages } from './stages';

export const DevelopmentStagesComponent = () => {
  return (
    <div className="developmentStages" id="stages">
      <h2 className="developmentStages__title">
        Этапы разработки интернет-магазина
      </h2>
      <Carousel>
        {stages.map(stage => {
          return (
            <div className="" key={stage.id}>
              <p>{stage.title}</p>
              <p>{stage.description}</p>
              {stage.images.map(image => {
                return (
                  <img src={image} alt="" key={image} />
                );
              })}
            </div>
          );
        })}
      </Carousel>
      <img src="media/stagesImages/sphere.png" alt="" />
      <img src="media/stagesImages/wave.png" alt="" />
    </div>
  );
};
