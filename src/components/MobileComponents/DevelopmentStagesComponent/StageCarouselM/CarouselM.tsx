/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState,
  Children,
  useEffect,
  cloneElement,
} from 'react';

import './CarouselM.scss';

import { stages } from '../stages';
import { StageCardM } from '../StageCardM/StageCardM';

const STAGE__WIDTH = 335;
const MARGIN__WIDTH = 25;

export const CarouselM = () => {
  const [offset, setOffset] = useState(0);
  const [cardsPassed, setCardsPassed] = useState(0);

  useEffect(() => {
    setOffset(cardsPassed * (STAGE__WIDTH + MARGIN__WIDTH));
  }, [cardsPassed]);

  const goLeft = () => {
    setCardsPassed(Math.max(0, cardsPassed - 1));
  };

  const goRight = () => {
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

        {cardsPassed < stages.length - 1
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
