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

const PAGE__WIDTH = 450;

export const Carousel = ({ children }) => {
  const [stages, setStages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setStages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            // height: '100%',
            maxWidth: `${PAGE__WIDTH}PX`,
            minWidth: `${PAGE__WIDTH}PX`,
          },
        });
      }),
    );
  }, []);

  const goLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE__WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const goRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE__WIDTH;

      const maxOffset = -(PAGE__WIDTH * (stages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className="carousel">
      <div className="carousel__showingWindow showingWindow">
        <img
          className="showingWindow__frame"
          src="media/stagesImages/rectangle--big.png"
          alt=""
        />
        <div
          className="showingWindow__allStages"
          style={{
            transform: `translate(${offset}px)`,
          }}
        >
          {stages}
        </div>
      </div>
      <div className="carousel__arrowsContainer">
        <div
          className="carousel__arrowButton arrowButton"
          onClick={() => goLeft()}
          onKeyDown={() => goLeft()}
          role="button"
          tabIndex={0}
        >
          <img
            src="media/stagesImages/rectangle.png"
            alt=""
            className="arrowButton__frame"
          />
          <img
            src="media/stagesImages/arrow--left.png"
            alt=""
            className="arrowButton__arrow"
          />
        </div>
        <div
          className="carousel__arrowButton arrowButton"
          onClick={() => goRight()}
          onKeyDown={() => goRight()}
          role="button"
          tabIndex={0}
        >
          <img
            src="media/stagesImages/rectangle.png"
            alt=""
            className="arrowButton__frame"
          />
          <img
            src="media/stagesImages/arrow--right.png"
            alt=""
            className="arrowButton__arrow"
          />
        </div>
      </div>
    </div>
  );
};
