import React from 'react';
import { IService } from '../../../types/IService';
import { ServiceItem } from './ServiceItem/ServiceItem';
import { services } from './services';

import './ServicesListComponent.scss';

export const ServicesListComponent = () => {
  return (
    <div className="servicesList" id="services">
      <div className="servicesList__limitContainer">
        <h2 className="servicesList__title">
          Что входит в услугу по созданию дизайна интернет-магазина?
          <img
            className="servicesList__bag"
            src="media/servicesImage/bag.png"
            alt=""
          />
        </h2>
        <ul className="servicesList__list">
          {services.map((service: IService) => {
            return (
              <li className="servicesList__list__item" key={service.id}>
                <ServiceItem service={service} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
