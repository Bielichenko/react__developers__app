/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { IService } from '../../../types/IService';

import './ServiceItem.scss';

interface props {
  service: IService;
}

export const ServiceItem: React.FC<props> = ({ service }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {
        isOpened
          ? (
            <div className="serviceItem">
              <div className="serviceItem__top">
                <img src="media/servicesImage/indicator--green.png" alt="" className="serviceItem__indicator" />
                <div
                  className="serviceItem__name"
                  onClick={() => setIsOpened(!isOpened)}
                  onKeyDown={() => setIsOpened(!isOpened)}
                  role="button"
                  tabIndex={0}
                >
                  {service.title}
                </div>
                <img src="media/servicesImage/arrow--opened.png" alt="" className="serviceItem__arrow" />
              </div>
              <div className="serviceItem__description">
                <img src="media/servicesImage/line.png" alt="" className="serviceItem__description__image" />
                {service.description}
              </div>
            </div>
          )
          : (
            <div className="serviceItem">
              <div className="serviceItem__top">
                <img src="media/servicesImage/indicator--blue.png" alt="" className="serviceItem__indicator" />
                <div
                  className="serviceItem__name"
                  onClick={() => setIsOpened(!isOpened)}
                  onKeyDown={() => setIsOpened(!isOpened)}
                  role="button"
                  tabIndex={0}
                >
                  {service.title}
                </div>
                <img src="media/servicesImage/arrow.png" alt="" className="serviceItem__arrow" />
              </div>
            </div>
          )
      }
    </>
  );
};
