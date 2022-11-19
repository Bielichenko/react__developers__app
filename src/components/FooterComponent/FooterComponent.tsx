import React from 'react';
import { LogoComponent } from '../LogoComponent/LogoComponent';

import './FooterComponent.scss';

export const FooterComponent = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__logos">
          <LogoComponent />
          <div className="footer__messangersImages">
            <img src="media/footerImages/messengersImages/1.png" alt="1" />
            <img src="media/footerImages/messengersImages/2.png" alt="2" />
            <img src="media/footerImages/messengersImages/3.png" alt="3" />
            <img src="media/footerImages/messengersImages/4.png" alt="4" />
            <img src="media/footerImages/messengersImages/5.png" alt="5" />
          </div>
        </div>
        <div className="footer__viberContacts viberContacts">
          <div className="viberContacts__item">
            <img src="media/footerImages/messengersImages/3.png" alt="3" />
            <p>Валерия: +380505859409</p>
          </div>
          <div className="viberContacts__item">
            <img src="media/footerImages/messengersImages/3.png" alt="3" />
            <p>Анна: +380505859409</p>
          </div>
          <div className="viberContacts__item">
            <img src="media/footerImages/messengersImages/3.png" alt="3" />
            <p>Валерия: +380505859409</p>
          </div>
        </div>
        <p>hr@dv-s.com</p>
      </div>
      <p className="footer__convention">Developers 2018-2022 © All rights reserved</p>
    </div>
  );
};
