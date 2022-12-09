import React, { useState } from 'react';
import cn from 'classnames';
import { IService } from '../../../../types/IService';

import './ServiceItem.scss';

interface props {
  service: IService;
}

export const ServiceItem: React.FC<props> = ({ service }) => {
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
        className="serviceItem"
        onClick={() => handleServiceItemClick(isOpened)}
        onKeyDown={() => handleServiceItemClick(isOpened)}
        role="button"
        tabIndex={0}
      >
        <div className="serviceItem__top">
          <div className="serviceItem__container">
            <div className={cn('serviceItem__top__indicator', { 'serviceItem__top__indicator--opened': isOpened })} />
            <h4
              className={cn('serviceItem__top__title', { 'serviceItem__top__title--bold': isOpened })}
            >
              {service.title}
            </h4>
          </div>
          <img src="media/servicesImage/arrow.png" alt="" className={cn('serviceItem__top__arrow', { 'serviceItem__top__arrow--opened': isOpened })} />
        </div>
        <div className={cn('descriptionWrapper', { 'descriptionWrapper--opened': isWrapperActive })}>
          <div className={cn('serviceItem__description', { 'serviceItem__description--opened': isOpened })}>
            <p className="serviceItem__description__text">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
