/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState,
  Children,
  useEffect,
  cloneElement,
} from 'react';

import './Carousel.scss';

import { stages } from '../stages';
import { StageCard } from '../StageCard/StageCard';

const STAGE__WIDTH = 672;
const MARGIN__WIDTH = 25;

export const Carousel = () => {
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

      const maxOffset = -(STAGE__WIDTH * (stages.length - 2) + (stages.length - 2) * MARGIN__WIDTH);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className="carousel">
      <div className="carousel__showingWindow showingWindow">
        <div
          className="showingWindow__allStages"
          style={{
            transform: `translate(${offset}px)`,
          }}
        >
          {
            stages.map(stage => {
              return (
                <React.Fragment key={stage.id}>
                  <StageCard stage={stage} />
                </React.Fragment>
              );
            })
          }
        </div>
      </div>
      <div className="carousel__arrowsContainer">
        <div
          className="carousel__arrowButton"
          onClick={() => goLeft()}
          onKeyDown={() => goLeft()}
          role="button"
          tabIndex={0}
        >
          <img
            src="media/stagesImages/arrow--left.png"
            alt=""
            className="carousel__arrowButton__arrow"
          />
        </div>
        <div
          className="carousel__arrowButton"
          onClick={() => goRight()}
          onKeyDown={() => goRight()}
          role="button"
          tabIndex={0}
        >
          <img
            src="media/stagesImages/arrow--right.png"
            alt=""
            className="carousel__arrowButton__arrow"
          />
        </div>
      </div>
    </div>
  );
};
