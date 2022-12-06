/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { IShop } from '../../../../types/IShop';

import './ShopCardM.scss';

interface props {
  shop: IShop
}

export const ShopCardM: React.FC<props> = ({ shop }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      {isHovered
        ? (
          <div
            role="button"
            className="shopCardM shopCardM--hovered"
            key={shop.id}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(false)}
            onKeyDown={() => setIsHovered(false)}
            tabIndex={0}
          >
            <h4 className="shopCardM__title">Онлайн-магазин</h4>
            <p>{shop.description}</p>
          </div>
        )
        : (
          <div
            role="button"
            className="shopCardM"
            key={shop.id}
            style={{ backgroundImage: `url(../../media/examplesImages/shopsImages/${shop.image})` }}
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => setIsHovered(true)}
            onKeyDown={() => setIsHovered(true)}
            tabIndex={0}
          >
          </div>
        )}
    </>
  );
};
