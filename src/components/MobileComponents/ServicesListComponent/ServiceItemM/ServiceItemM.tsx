/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { IService } from '../../../../types/IService';

import './ServiceItemM.scss';

interface props {
  service: IService;
}

export const ServiceItemM: React.FC<props> = ({ service }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {
        isOpened
          ? (
            <div
              className="serviceItemM serviceItemM--opened"
              onClick={() => setIsOpened(!isOpened)}
              onKeyDown={() => setIsOpened(!isOpened)}
              role="button"
              tabIndex={0}
            >
              <div className="serviceItemM__top">
                <div className="serviceItemM__container">
                  <img src="media/servicesImage/indicator--blue.png" alt="" className="serviceItemM__top__indicator" />
                  <div
                    className="serviceItemM__top__title"
                  >
                    {service.title}
                  </div>
                </div>
                <img src="media/servicesImage/arrow--opened.png" alt="" className="serviceItemM__arrow" />
              </div>
              <div className="serviceItemM__description">
                <p className="serviceItemM__description__text">
                  {service.description}
                </p>
              </div>
            </div>
          )
          : (
            <div
              className="serviceItemM serviceItemM--closed"
              onClick={() => setIsOpened(!isOpened)}
              onKeyDown={() => setIsOpened(!isOpened)}
              role="button"
              tabIndex={0}
            >
              <div className="serviceItemM__top">
                <div className="container">
                  <img src="media/servicesImage/indicator--green.png" alt="" className="serviceItemM__top__indicator" />
                  <div
                    className="serviceItemM__top__title"
                  >
                    {service.title}
                  </div>
                </div>
                <img src="media/servicesImage/arrow.png" alt="" className="serviceItemM__top__arrow" />
              </div>
            </div>
          )
      }
    </>
  );
};
