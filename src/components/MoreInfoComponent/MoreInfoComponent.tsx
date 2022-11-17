import React from 'react';

import './MoreInfoComponent.scss';

export const MoreInfoComponent = () => {
  return (
    <div className="moreInfo">
      <h2 className="moreInfo__title">
        Необходимо больше информации?
      </h2>
      <p className="moreInfo__text">
        Если Вы владелец онлайн-магазина или только начинаете свой путь в
        <br />
        электронной коммерции и вам нужен уникальный дизайн онлайн
        <br />
        магазина для стартапа, обратитесь к нашему веб дизайнеру.
        <br />
        За выгодную цену и короткий период времени, он поможет
        <br />
        визуализировать ваш веб проект.
      </p>
      <button type="button" className="moreInfo__transferToOrder button">
        Оставить заявку
      </button>
      {/* <img src="src/media/moreInfoImages/clock.png" alt="" /> */}

      <img src="media/examplesImages/sphere.png" alt="" />

      <img src="media/examplesImages/sphere2.png" alt="" />
    </div>
  );
};
