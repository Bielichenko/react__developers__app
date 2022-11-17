import React from 'react';
import { IService } from '../../types/IService';
import { ServiceItem } from './ServiceItem/ServiceItem';
import { services } from './services';

export const ServicesListComponent = () => {
  return (
    <div className="servicesList">
      {services.map((service: IService) => {
        return (
          <div className="servicesList__item" key={service.id}>
            <ServiceItem service={service} />
          </div>
        );
      })}
    </div>
  );
};
