/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState,
  Children,
  useEffect,
  cloneElement,
} from 'react';

import './CarouselExamplesM.scss';

import { shops } from '../shops';
import { ShopCardM } from '../ExamplesShopCardM/ShopCardM';

const STAGE__WIDTH = 335;
const MARGIN__WIDTH = 20;

export const CarouselExamplesM = () => {
  const [offset, setOffset] = useState(0);

  const goLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + STAGE__WIDTH + MARGIN__WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const goRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - STAGE__WIDTH - MARGIN__WIDTH;

      const maxOffset = -(STAGE__WIDTH * (shops.length / 3 - 1) + (shops.length / 3 - 1)
        * MARGIN__WIDTH);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className="carouselM">
      <div className="carouselM__showingWindowM examplesShowingWindowM">
        <div className="examplesShowingWindowM__shopsSprite" style={{ transform: `translate(${offset}px)` }}>
          {shops.map(shop => {
            return (
              <React.Fragment key={shop.id}>
                <ShopCardM shop={shop} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="carouselM__arrowsContainer">
        <div
          className="carouselM__arrowButton"
          onClick={() => goLeft()}
          onKeyDown={() => goLeft()}
          role="button"
          tabIndex={0}
        >
          <img
            src="media/stagesImages/arrow--left.png"
            alt=""
            className="carouselM__arrowButton__arrow"
          />
        </div>
        <div
          className="carouselM__arrowButton"
          onClick={() => goRight()}
          onKeyDown={() => goRight()}
          role="button"
          tabIndex={0}
        >
          <img
            src="media/stagesImages/arrow--right.png"
            alt=""
            className="carouselM__arrowButton__arrow"
          />
        </div>
      </div>
    </div>
  );
};
