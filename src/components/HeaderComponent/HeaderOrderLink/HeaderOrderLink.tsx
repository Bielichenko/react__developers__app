import React from 'react';

import './HeaderOrderLink.scss';

export const HeaderOrderLink = () => {
  return (
    <div className="orderLink">
      <h1 className="orderLink__title">
        Разработка
        <br />
        интернет-магазина
        <br />
        с нуля за неделю
      </h1>
      <p className="orderLink__text">
        Дизайн интернет магазина, элементов микро UX,
        <br />
        корзин, личного кабинета - от фирменного стиля
        <br />
        до пользовательского интерфейса в сжатые сроки
        <br />
        с командой Virtual Designers
      </p>
      <a href="#order" className="orderLink__orderButton button">
        Заказать
      </a>
    </div>
  );
};
