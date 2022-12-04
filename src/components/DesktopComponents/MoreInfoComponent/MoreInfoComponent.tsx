/* eslint-disable jsx-quotes */
import React from 'react';

import './MoreInfoComponent.scss';

export const MoreInfoComponent = () => {
  return (
    <div className="moreInfo">
      <div className="moreInfo__container">
        <div className="moreInfo__textBlock">
          <h2 className="moreInfo__textBlock__title">
            Необходимо больше информации?
          </h2>
          <p className="moreInfo__textBlock__text">
            Если Вы владелец онлайн-магазина или только начинаете свой путь в
            {/* <br /> */}
            электронной коммерции и вам нужен уникальный дизайн онлайн
            {/* <br /> */}
            магазина для стартапа, обратитесь к нашему веб дизайнеру.
            {/* <br /> */}
            За выгодную цену и короткий период времени, он поможет
            {/* <br /> */}
            визуализировать ваш веб проект.
          </p>
          <button type="button" className="moreInfo__textBlock__transferToOrder">
            Оставить заявку
          </button>
        </div>
        <img src="media/moreInfoImages/clock.png" className='moreInfo__image moreInfo__image--clock' alt="" />
        <img src="media/moreInfoImages/cylinder.png" className='moreInfo__image moreInfo__image--cylinder' alt="" />
        <img src="media/moreInfoImages/order.png" className='moreInfo__image moreInfo__image--order' alt="" />
        <img src="media/moreInfoImages/sphere--big.png" className='moreInfo__image moreInfo__image--sphereBig' alt="" />
        <img src="media/moreInfoImages/sphere--purple.png" className='moreInfo__image moreInfo__image--spherePurple' alt="" />
        <img src="media/moreInfoImages/sphere--small.png" className='moreInfo__image moreInfo__image--sphereSmall' alt="" />
        <img src="media/moreInfoImages/taper.png" className='moreInfo__image moreInfo__image--taper' alt="" />
        <img src="media/moreInfoImages/wave.png" className='moreInfo__image moreInfo__image--wave' alt="" />
      </div>
    </div>
  );
};
