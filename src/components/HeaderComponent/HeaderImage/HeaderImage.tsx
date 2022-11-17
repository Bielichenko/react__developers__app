/* eslint-disable max-len */
import React from 'react';

import './HeaderImage.scss';

export const HeaderImage = () => {
  return (
    <div className="headerImage">
      <img className="headerImage__ellipse headerImage__ellipse--blue" src="media/headerImage/ellipse.png" alt="" />
      <img className="headerImage__ellipse headerImage__ellipse--white" src="media/headerImage/ellipse--white.png" alt="" />

      <img className="headerImage__cart" src="media/headerImage/cart.png" alt="" />

      <img className="headerImage__sphere headerImage__sphere--blue" src="media/headerImage/sphere--blue.png" alt="" />
      <img className="headerImage__sphere headerImage__sphere--blue--left" src="media/headerImage/sphere--blue.png" alt="" />
      <img className="headerImage__sphere headerImage__sphere--purple" src="media/headerImage/sphere--purple.png" alt="" />

      <img className="headerImage__wave headerImage__wave--blue" src="media/headerImage/wave--blue.png" alt="" />
      <img className="headerImage__wave headerImage__wave--purple" src="media/headerImage/wave--purple.png" alt="" />
      <img className="headerImage__wave headerImage__wave--purple--left" src="media/headerImage/wave--purpleRev.png" alt="" />

      <img className="headerImage__cylinder headerImage__cylinder--blue" src="media/headerImage/cylinder--blue.png" alt="" />
      <img className="headerImage__cylinder headerImage__cylinder--pink" src="media/headerImage/cylinder--pink.png" alt="" />
    </div>
  );
};
