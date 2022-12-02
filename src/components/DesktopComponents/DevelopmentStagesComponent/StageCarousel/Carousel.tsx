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

const STAGE__WIDTH = 672;
const STAGE__HEIGHT = 389;
const MARGIN__WIDTH = 25;

let prevWindowWidth: undefined | number;
let newWindowWidth: undefined | number;
let initialWindowWidth: undefined | number;
let widthChange = 0;
let offsetPerCard: undefined | number;
let requiredOffset = 0;

export const Carousel = () => {
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPassed, setCardsPassed] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const resize = () => {
    const { clientWidth } = ref.current || {};

    newWindowWidth = clientWidth;
    // cardWidthEx = cardWidth;

    if (clientWidth) {
      setCardWidth(clientWidth * 0.485);
    }
  };

  const initialResize = () => {
    const { clientHeight, clientWidth } = ref.current || {};

    prevWindowWidth = clientWidth;
    initialWindowWidth = clientWidth;

    // setPrevCardWidth(cardWidthEx);

    // if (clientWidth) {
    //   cardWidthEx = clientWidth * 0.45;
    // }

    if (clientWidth) {
      setCardWidth(clientWidth * 0.485);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    initialResize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    // cardWidthEx = cardWidth;

    // console.log(prevCardWidth, cardWidth, offset);
    // const { clientHeight, clientWidth } = ref.current || {};

    // console.log(clientWidth);
    // console.log(prevWindowWidth, newWindowWidth);

    if (prevWindowWidth && newWindowWidth) {
      console.log(prevWindowWidth, newWindowWidth);
      if (prevWindowWidth > newWindowWidth) {
        widthChange += prevWindowWidth - newWindowWidth;
      } else {
        widthChange += newWindowWidth - prevWindowWidth;
        offsetPerCard = widthChange / stages.length;
      }
    }

    // cardPassed = Math.floor(offset / cardWidth + 1);

    // console.log('test', offset, cardWidth);
    // console.log('cardPassed', cardPassed);

    if (offsetPerCard) {
      // requiredOffset = offsetPerCard * cardsPassed + 1;
      requiredOffset = widthChange;
    }

    let growth: number | undefined;

    if (newWindowWidth && initialWindowWidth) {
      growth = newWindowWidth - initialWindowWidth;
    }

    const testOffset = cardsPassed * (cardWidth + 25);

    setOffset(testOffset);

    console.log(testOffset);

    // console.log('test', widthChange, offsetPerCard, requiredOffset);

    prevWindowWidth = newWindowWidth;

    // if (cardWidthEx) {
    //   if (cardWidth > cardWidthEx) {
    //     if (prevCardWidth) {
    //       console.log('testing');
    //       setOffset(offset - 2 * (prevCardWidth - cardWidth));
    //     }
    //   }
    // }
  });

  const goLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + cardWidth + MARGIN__WIDTH;

      return Math.min(newOffset, 0);
    });

    setCardsPassed(Math.max(0, cardsPassed - 1));
  };

  const goRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - cardWidth - MARGIN__WIDTH;

      const maxOffset = -(cardWidth * (stages.length - 2) + (stages.length - 2) * MARGIN__WIDTH);

      return Math.max(newOffset, maxOffset);
    });

    // setCardsPassed(cardsPassed + 1);
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
