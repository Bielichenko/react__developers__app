/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
import React from 'react';

import './MoreInfoComponentM.scss';

export const MoreInfoComponentM = () => {
  return (
    <div className="moreInfoM">
      <div className="moreInfoM__container">
        <h2 className="moreInfoM__title">
          Необходимо больше информации?
        </h2>
        <div className="moreInfoM__imagesBlock">
          <img src="media/moreInfoImages/clock.png" className='moreInfoM__imagesBlock__image moreInfoM__imagesBlock__image--clock' alt="" />
          <img src="media/moreInfoImages/cylinder.png" className='moreInfoM__imagesBlock__image moreInfoM__imagesBlock__image--cylinder' alt="" />
          <img src="media/moreInfoImages/order.png" className='moreInfoM__imagesBlock__image moreInfoM__imagesBlock__image--order' alt="" />
          <img src="media/moreInfoImages/sphere--purple.png" className='moreInfoM__imagesBlock__image moreInfoM__imagesBlock__image--spherePurple' alt="" />
          <img src="media/moreInfoImages/sphere--small.png" className='moreInfoM__imagesBlock__image moreInfoM__imagesBlock__image--sphereSmall' alt="" />
          <img src="media/moreInfoImages/taper.png" className='moreInfoM__imagesBlock__image moreInfoM__imagesBlock__image--taper' alt="" />
          <img src="media/moreInfoImages/wave.png" className='moreInfoM__imagesBlock__image moreInfoM__imagesBlock__image--wave' alt="" />
        </div>
        <p className="moreInfoM__text">
          Если Вы владелец онлайн-магазина или только начинаете свой путь в
          электронной коммерции и вам нужен уникальный дизайн онлайн
          магазина для стартапа, обратитесь к нашему веб дизайнеру.
          За выгодную цену и короткий период времени, он поможет
          визуализировать ваш веб проект.
        </p>
        <button type="button" className="moreInfoM__transferToOrder">
          Оставить заявку
        </button>
      </div>
    </div>
  );
};
