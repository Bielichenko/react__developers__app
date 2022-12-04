/* eslint-disable no-trailing-spaces */
import React from 'react';
import { HeaderImagesM } from '../HeaderImagesM/HeaderImagesM';
import { HeaderMenuM } from '../HeaderMenuM/HeaderMenuM';

import './HeaderIntroM.scss';

interface props {
  isMenuOpened: boolean;
}

export const HeaderIntroM: React.FC<props> = ({ isMenuOpened }) => {
  return (
    <div className="headerIntroM">
      <HeaderImagesM />
      <div className="headerIntroM__textBlock">
        <h1 className="headerIntroM__textBlock__title">
          Разработка 
          <br />
          интернет-магазина 
          <br />
          с нуля за неделю 
        </h1>
        <p className="headerIntroM__textBlock__text">
          Дизайн интернет магазина, элементов микро UX,
          корзин, личного кабинета - от фирменного стиля
          до пользовательского интерфейса в сжатые сроки
          с командой Virtual Designers
        </p>
        <a href="#order" className="headerIntroM__textBlock__orderButton">
          Заказать
        </a>
      </div>
      <HeaderMenuM isMenuOpened={isMenuOpened} />
    </div>
  );
};
