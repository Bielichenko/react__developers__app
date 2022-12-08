/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { LogoComponent } from '../../DesktopComponents/LogoComponent/LogoComponent';

import './FooterComponentM.scss';

export const FooterComponentM = () => {
  return (
    <div className="footerM" id="footer">
      <div className="footerM__logo">
        <LogoComponent />
      </div>
      <div className="footerM__viberContacts viberContactsM">
        <div className="viberContactsM__item">
          <img className="viberContactsM__item__image" src="media/footerImages/mobile/viber.png" alt="3" />
          <p className="viberContactsM__item__text">Валерия: +380505859409</p>
        </div>
        <div className="viberContactsM__item">
          <img className="viberContactsM__item__image" src="media/footerImages/messengersImages/3.png" alt="3" />
          <p className="viberContactsM__item__text">Анна: +380505859409</p>
        </div>
        <div className="viberContactsM__item">
          <img className="viberContactsM__item__image" src="media/footerImages/messengersImages/3.png" alt="3" />
          <p className="viberContactsM__item__text">Валерия: +380505859409</p>
        </div>
      </div>
      <div className="footerM__icons">
        <img className="footerM__icons__icon" src="public/media/footerImages/messengersImages/fb.png" alt="1" />
        <img className="footerM__icons__icon" src="media/footerImages/messengersImages/inst.png" alt="2" />
        <img className="footerM__icons__icon" src="media/footerImages/messengersImages/tg.png" alt="3" />
        <img className="footerM__icons__icon" src="media/footerImages/messengersImages/vb.png" alt="4" />
        <img className="footerM__icons__icon" src="media/footerImages/messengersImages/wtu.png" alt="5" />
      </div>

      <p className="footerM__email">hr@dv-s.com</p>
      <p className="footerM__convention">Developers 2018-2022 © All rights reserved</p>
    </div>
  );
};
