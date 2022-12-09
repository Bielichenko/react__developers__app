import React, {
  useState,
  useEffect,
} from 'react';

import './CarouselM.scss';

import { stages } from '../stages';
import { StageCardM } from '../StageCardM/StageCardM';

const CARD__WIDTH = 335;
const MARGIN__WIDTH = 25;

export const CarouselM = () => {
  const [offset, setOffset] = useState(0);
  const [cardsPassed, setCardsPassed] = useState(0);

  useEffect(() => {
    setOffset(cardsPassed * (CARD__WIDTH + MARGIN__WIDTH));
  }, [cardsPassed]);

  const leftButtonHandler = () => {
    setCardsPassed(Math.max(0, cardsPassed - 1));
  };

  const rightButtonHandler = () => {
    setCardsPassed(Math.min(stages.length - 1, cardsPassed + 1));
  };

  return (
    <div className="carouselM">
      <div className="carouselM__showingWindowM showingWindowM">
        <div
          className="showingWindowM__allStages"
          style={{
            transform: `translate(${-offset}px)`,
          }}
        >
          {
            stages.map(stage => {
              return (
                <React.Fragment key={stage.id}>
                  <StageCardM stage={stage} />
                </React.Fragment>
              );
            })
          }
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

        {cardsPassed < stages.length - 1
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
