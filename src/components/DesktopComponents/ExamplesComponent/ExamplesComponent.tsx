/* eslint-disable no-console */
import React from 'react';
import { ShopCard } from './ExamplesShopCard/ShopCard';

import './ExamplesComponent.scss';
import { shops } from './shops';

export const ExamplesComponent = () => {
  return (
    <div className="examples" id="portfolio">
      <h2 className="examples__title">
        Примеры онлайн-магазинов
      </h2>
      <div className="examples__shops">
        {shops.map(shop => {
          return (
            <React.Fragment key={shop.id}>
              <ShopCard shop={shop} />
            </React.Fragment>
          );
        })}
      </div>
      <img className="examples__image examples__image--sphere" src="media/examplesImages/sphere.png" alt="" />
      <img className="examples__image examples__image--wave" src="media/examplesImages/wave.png" alt="" />
    </div>
  );
};
