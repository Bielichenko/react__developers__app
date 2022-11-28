import React from 'react';
import { IService } from '../../../types/IService';
import { ServiceItemM } from './ServiceItemM/ServiceItemM';
import { services } from './services';

import './ServicesListComponentM.scss';

export const ServicesListComponentM = () => {
  return (
    <div className="servicesListM" id="services">
      <h2 className="servicesListM__title">
        Что входит в услугу по созданию дизайна интернет-магазина?
      </h2>
      <ul className="servicesListM__list">
        {services.map((service: IService) => {
          return (
            <li className="servicesListM__list__item" key={service.id}>
              <ServiceItemM service={service} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
