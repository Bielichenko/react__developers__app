import React from 'react';
import { CarouselExamplesM } from './StageCarouselM/CarouselExamplesM';

import './ExamplesComponentM.scss';

export const ExamplesComponentM = () => {
  return (
    <div className="examplesM" id="portfolio">
      <h2 className="examplesM__title">
        Примеры
        <br />
        онлайн-магазинов
      </h2>
      <CarouselExamplesM />
      <img className="examplesM__image examplesM__image--sphere" src="media/examplesImages/sphere.png" alt="" />
    </div>
  );
};
