/* eslint-disable max-len */
import React from 'react';

import './HeaderImages.scss';

export const HeaderImages = () => {
  return (
    <div className="headerImages">
      <img className="headerImages__ellipse headerImages__ellipse--blue" src="media/headerImage/ellipse.png" alt="" />
      <img className="headerImages__ellipse headerImages__ellipse--white" src="media/headerImage/ellipse--white.png" alt="" />

      <img className="headerImages__cart" src="media/headerImage/cart.png" alt="" />

      <img className="headerImages__sphere headerImages__sphere--blue" src="media/headerImage/sphere--blue.png" alt="" />
      <img className="headerImages__sphere headerImages__sphere--blue--left" src="media/headerImage/sphere--blue.png" alt="" />
      <img className="headerImages__sphere headerImages__sphere--purple" src="media/headerImage/sphere--purple.png" alt="" />

      <img className="headerImages__wave headerImages__wave--blue" src="media/headerImage/wave--blue.png" alt="" />
      <img className="headerImages__wave headerImages__wave--purple" src="media/headerImage/wave--purple.png" alt="" />
      <img className="headerImages__wave headerImages__wave--purple--left" src="media/headerImage/wave--purpleRev.png" alt="" />

      <img className="headerImages__cylinder headerImages__cylinder--blue" src="media/headerImage/cylinder--blue.png" alt="" />
      <img className="headerImages__cylinder headerImages__cylinder--pink" src="media/headerImage/cylinder--pink.png" alt="" />
    </div>
  );
};
