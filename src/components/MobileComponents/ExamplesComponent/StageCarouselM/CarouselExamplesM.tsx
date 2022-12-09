import React, {
  useState,
  useEffect,
} from 'react';
import { shops } from '../shops';
import { ShopCardM } from '../ExamplesShopCardM/ShopCardM';

import './CarouselExamplesM.scss';

const CARD__WIDTH = 335;
const MARGIN__WIDTH = 20;

export const CarouselExamplesM = () => {
  const [offset, setOffset] = useState(0);
  const [cardsPassed, setCardsPassed] = useState(0);

  useEffect(() => {
    setOffset(cardsPassed * (CARD__WIDTH + MARGIN__WIDTH));
  }, [cardsPassed]);

  const leftButtonHandler = () => {
    setCardsPassed(cardsPassed - 1);
  };

  const rightButtonHandler = () => {
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
              onClick={() => leftButtonHandler()}
              onKeyDown={() => leftButtonHandler()}
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
              onClick={() => rightButtonHandler()}
              onKeyDown={() => rightButtonHandler()}
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
