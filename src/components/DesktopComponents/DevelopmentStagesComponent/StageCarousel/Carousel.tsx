import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import { stages } from '../stages';
import { StageCard } from '../StageCard/StageCard';

import './Carousel.scss';

const CARD__WIDTH = 389;
const MARGIN__WIDTH = 25;

export const Carousel = () => {
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPassed, setCardsPassed] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const resizeHandler = () => {
    const { clientWidth } = ref.current || {};

    if (clientWidth) {
      setCardWidth(clientWidth * 0.485);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    setOffset(cardsPassed * (cardWidth + MARGIN__WIDTH));
  }, [cardsPassed, cardWidth]);

  const leftButtonHandler = () => {
    setCardsPassed(Math.max(0, cardsPassed - 1));
  };

  const rightButtonHandler = () => {
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
                    stageCardHeight={`${CARD__WIDTH}px`}
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
              onClick={() => leftButtonHandler()}
              onKeyDown={() => leftButtonHandler()}
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
              onClick={() => rightButtonHandler()}
              onKeyDown={() => rightButtonHandler()}
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
