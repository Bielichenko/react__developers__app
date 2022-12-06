/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState,
  Children,
  useEffect,
  cloneElement,
  useRef,
} from 'react';

import './Carousel.scss';

import { stages } from '../stages';
import { StageCard } from '../StageCard/StageCard';

const STAGE__HEIGHT = 389;
const MARGIN__WIDTH = 25;

export const Carousel = () => {
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPassed, setCardsPassed] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const resize = () => {
    const { clientWidth } = ref.current || {};

    if (clientWidth) {
      setCardWidth(clientWidth * 0.485);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    setOffset(cardsPassed * (cardWidth + MARGIN__WIDTH));
  }, [cardsPassed, cardWidth]);

  const goLeft = () => {
    setCardsPassed(Math.max(0, cardsPassed - 1));
  };

  const goRight = () => {
    setCardsPassed(Math.min(stages.length - 2, cardsPassed + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel__showingWindow showingWindow" ref={ref}>
        <div
          className="showingWindow__allStages"
          style={{
            transform: `translate(${-offset}px)`,
          }}
        >
          {
            stages.map(stage => {
              return (
                <React.Fragment key={stage.id}>
                  <StageCard
                    stage={stage}
                    stageCardWidth={`${cardWidth}px`}
                    stageCardHeight={`${STAGE__HEIGHT}px`}
                  />
                </React.Fragment>
              );
            })
          }
        </div>
      </div>
      <div className="arrowsContainer">
        {cardsPassed > 0
          ? (
            <div
              className="arrowsContainer__arrowButton arrowsContainer__arrowButton--left"
              onClick={() => goLeft()}
              onKeyDown={() => goLeft()}
              role="button"
              tabIndex={0}
            >
            </div>
          )
          : (
            <div
              className="arrowsContainer__arrowButtonDisabled arrowsContainer__arrowButtonDisabled--left"
            >
            </div>
          )}

        {cardsPassed < stages.length - 2
          ? (
            <div
              className="arrowsContainer__arrowButton arrowsContainer__arrowButton--right"
              onClick={() => goRight()}
              onKeyDown={() => goRight()}
              role="button"
              tabIndex={0}
            >
            </div>

          )
          : (
            <div
              className="arrowsContainer__arrowButtonDisabled arrowsContainer__arrowButtonDisabled--right"
            >
            </div>
          )}
      </div>
    </div>
  );
};
