import React from 'react';
import { LogoComponent } from '../../DesktopComponents/LogoComponent/LogoComponent';

import './FooterComponentM.scss';

export const FooterComponentM = () => {
  return (
    <div className="footerM" id="footer">
      <div className="footerM__logo">
        <LogoComponent />
      </div>
      <div className="footerM__viberContacts viberContacts">
        <div className="viberContacts__item">
          <img className="viberContacts__item__image" src="media/footerImages/mobile/viber.png" alt="3" />
          <p className="viberContacts__item__text">Валерия: +380505859409</p>
        </div>
        <div className="viberContacts__item">
          <img className="viberContacts__item__image" src="media/footerImages/messengersImages/3.png" alt="3" />
          <p className="viberContacts__item__text">Анна: +380505859409</p>
        </div>
        <div className="viberContacts__item">
          <img className="viberContacts__item__image" src="media/footerImages/messengersImages/3.png" alt="3" />
          <p className="viberContacts__item__text">Валерия: +380505859409</p>
        </div>
      </div>
      <div className="footerM__icons">
        <img className="footerM__icons__icon" src="media/footerImages/messengersImages/1.png" alt="1" />
        <img className="footerM__icons__icon" src="media/footerImages/messengersImages/2.png" alt="2" />
        <img className="footerM__icons__icon" src="media/footerImages/messengersImages/3.png" alt="3" />
        <img className="footerM__icons__icon" src="media/footerImages/messengersImages/4.png" alt="4" />
        <img className="footerM__icons__icon" src="media/footerImages/messengersImages/5.png" alt="5" />
      </div>

      <p className="footerM__email">hr@dv-s.com</p>
      <p className="footerM__convention">Developers 2018-2022 © All rights reserved</p>
    </div>
  );
};
