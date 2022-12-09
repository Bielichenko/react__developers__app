import React from 'react';
import { HeaderImages } from '../HeaderImages/HeaderImages';

import './HeaderIntro.scss';

export const HeaderIntro = () => {
  return (
    <div className="headerIntro">
      <div className="headerIntro__limitContainer">
        <div className="headerIntro__textBlock">
          <h1 className="headerIntro__textBlock__title">
            Разработка
            <br />
            интернет-магазина
            <br />
            с нуля за неделю
          </h1>
          <p className="headerIntro__textBlock__text">
            Дизайн интернет магазина, элементов микро UX,
            <br />
            корзин, личного кабинета - от фирменного стиля
            <br />
            до пользовательского интерфейса в сжатые сроки
            <br />
            с командой Virtual Designers
          </p>
          <a href="#order" className="orderButton">
            Заказать
          </a>
        </div>
        <HeaderImages />
      </div>
    </div>
  );
};
