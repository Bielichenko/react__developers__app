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

  const goLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + STAGE__WIDTH + MARGIN__WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const goRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - STAGE__WIDTH - MARGIN__WIDTH;

      const maxOffset = -(STAGE__WIDTH * (stages.length - 1) + (stages.length - 1) * MARGIN__WIDTH);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className="carouselM">
      <div className="carouselM__showingWindowM showingWindowM">
        <div
          className="showingWindowM__allStages"
          style={{
            transform: `translate(${offset}px)`,
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
