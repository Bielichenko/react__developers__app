/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import cn from 'classnames';

import { IService } from '../../../../types/IService';

import './ServiceItemM.scss';

interface props {
  service: IService;
}

export const ServiceItemM: React.FC<props> = ({ service }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isWrapperActive, setIsWrapperActive] = useState(false);

  const handleServiceItemClick = (isItemOpenNow: boolean) => {
    if (isItemOpenNow === false) {
      setIsOpened(true);
      setIsWrapperActive(true);
    }

    function hideWrapper() {
      setIsWrapperActive(false);
    }

    if (isItemOpenNow === true) {
      setIsOpened(false);

      setTimeout(hideWrapper, 400);
    }
  };

  return (
    <>
      <div
        className="serviceItemM"
        onClick={() => handleServiceItemClick(isOpened)}
        onKeyDown={() => handleServiceItemClick(isOpened)}
        role="button"
        tabIndex={0}
      >
        <div className="serviceItemM__top">
          <div className="serviceItemM__container">
            <div className={cn('serviceItemM__top__indicator', { 'serviceItemM__top__indicator--opened': isOpened })} />
            <h4
              className={cn('serviceItemM__top__title', { 'serviceItemM__top__title--bold': isOpened })}
            >
              {service.title}
            </h4>
          </div>
          <img src="media/servicesImage/arrow.png" alt="" className={cn('serviceItemM__top__arrow', { 'serviceItemM__top__arrow--opened': isOpened })} />
        </div>
        <div className={cn('descriptionWrapper', { 'descriptionWrapper--opened': isWrapperActive })}>
          <div className={cn('serviceItemM__description', { 'serviceItemM__description--opened': isOpened })}>
            <p className="serviceItemM__description__text">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
