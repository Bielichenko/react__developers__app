import React, { useState } from 'react';
import { IShop } from '../../../../types/IShop';

import './ShopCard.scss';

interface props {
  shop: IShop
}

export const ShopCard: React.FC<props> = ({ shop }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      {isHovered
        ? (
          <div
            className="shopCard shopCard--hovered"
            key={shop.id}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h4 className="shopCard__title">Онлайн-магазин</h4>
            <p>{shop.description}</p>
          </div>
        )
        : (
          <div
            className="shopCard"
            key={shop.id}
            style={{ backgroundImage: `url(media/examplesImages/shopsImages/${shop.image})` }}
            onMouseEnter={() => setIsHovered(true)}
          >
          </div>
        )}
    </>
  );
};
