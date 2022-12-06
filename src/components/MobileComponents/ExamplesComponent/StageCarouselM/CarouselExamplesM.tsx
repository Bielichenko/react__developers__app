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
  const [cardsPassed, setCardsPassed] = useState(0);

  useEffect(() => {
    setOffset(cardsPassed * (STAGE__WIDTH + MARGIN__WIDTH));
  }, [cardsPassed]);

  const goLeft = () => {
    setCardsPassed(cardsPassed - 1);
  };

  const goRight = () => {
    setCardsPassed(cardsPassed + 1);
  };

  return (
    <div className="carouselM">
      <div className="carouselM__showingWindowM examplesShowingWindowM">
        <div className="examplesShowingWindowM__shopsSprite" style={{ transform: `translate(${-offset}px)` }}>
          {shops.map(shop => {
            return (
              <React.Fragment key={shop.id}>
                <ShopCardM shop={shop} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="arrowsContainerM">
        {cardsPassed > 0
          ? (
            <div
              className="arrowsContainerM__arrowButton arrowsContainerM__arrowButton--left"
              onClick={() => goLeft()}
              onKeyDown={() => goLeft()}
              role="button"
              tabIndex={0}
            >
            </div>
          )
          : (
            <div
              className="arrowsContainerM__arrowButtonDisabled arrowsContainerM__arrowButtonDisabled--left"
            >
            </div>
          )}

        {cardsPassed < 1
          ? (
            <div
              className="arrowsContainerM__arrowButton arrowsContainerM__arrowButton--right"
              onClick={() => goRight()}
              onKeyDown={() => goRight()}
              role="button"
              tabIndex={0}
            >
            </div>

          )
          : (
            <div
              className="arrowsContainerM__arrowButtonDisabled arrowsContainerM__arrowButtonDisabled--right"
            >
            </div>
          )}
      </div>
    </div>
  );
};
