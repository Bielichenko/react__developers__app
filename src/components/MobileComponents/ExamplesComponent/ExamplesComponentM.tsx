/* eslint-disable no-console */
import React from 'react';

import './ExamplesComponentM.scss';
import { CarouselExamplesM } from './StageCarouselM/CarouselExamplesM';

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
