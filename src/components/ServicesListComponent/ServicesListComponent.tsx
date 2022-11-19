import React from 'react';
import { IService } from '../../types/IService';
import { ServiceItem } from './ServiceItem/ServiceItem';
import { services } from './services';

import './ServicesListComponent.scss';

export const ServicesListComponent = () => {
  return (
    <div className="servicesList" id="services">
      <h2 className="servicesList__title">
        Что входит в услугу по созданию дизайна интернет-магазина?
      </h2>
      <ul className="setrvicesList__list">
        {services.map((service: IService) => {
          return (
            <li className="servicesList__list__item" key={service.id}>
              <ServiceItem service={service} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
