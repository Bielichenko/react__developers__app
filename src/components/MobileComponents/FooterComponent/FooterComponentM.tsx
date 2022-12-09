import React from 'react';
import { LogoComponent } from '../../DesktopComponents/LogoComponent/LogoComponent';

import './FooterComponentM.scss';

export const FooterComponentM = () => {
  return (
    <div className="footerM" id="footer">
      <div className="footerM__mainLogo">
        <LogoComponent />
      </div>
      <div className="footerM__viberContacts viberContactsM">
        <div className="viberContactsM__contact">
          <img className="viberContactsM__contact__icon" src="media/footerImages/messengersImages/vb.png" alt="3" />
          <a className="viberContactsM__contact__phone" href="tel:380505859409">Валерия: +380505859409</a>
        </div>
        <div className="viberContactsM__contact">
          <img className="viberContactsM__contact__icon" src="media/footerImages/messengersImages/vb.png" alt="3" />
          <a className="viberContactsM__contact__phone" href="tel:+380505859409">Анна: +380505859409</a>
        </div>
        <div className="viberContactsM__contact">
          <img className="viberContactsM__contact__icon" src="media/footerImages/messengersImages/vb.png" alt="3" />
          <a className="viberContactsM__contact__phone" href="tel:380505859409">Валерия: +380505859409</a>
        </div>
      </div>
      <div className="footerM__icons">
        <a className="footerM__icons__iconWrapper" href="https://uk-ua.facebook.com/" rel="noopener noreferrer" target="_blank"><img className="footerM__icons__icon" src="media/footerImages/mobile/fb.png" alt="1" /></a>
        <a className="footerM__icons__iconWrapper" href="https://web.telegram.org/" rel="noopener noreferrer" target="_blank"><img className="footerM__icons__icon" src="media/footerImages/mobile/tg.png" alt="2" /></a>
        <a className="footerM__icons__iconWrapper" href="https://www.viber.com/ru/" rel="noopener noreferrer" target="_blank">
          <img className="footerM__icons__icon footerM__icons__icon--large" src="media/footerImages/messengersImages/vb.png" alt="3" />
        </a>
        <a className="footerM__icons__iconWrapper" rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank"><img className="footerM__icons__icon" src="media/footerImages/mobile/inst.png" alt="4" /></a>
        <a className="footerM__icons__iconWrapper" href="https://www.whatsapp.com/?lang=ru" rel="noopener noreferrer" target="_blank">
          <img className="footerM__icons__icon footerM__icons__icon--large" src="media/footerImages/messengersImages/wtu.png" alt="5" />
        </a>
      </div>
      <a className="footerM__email" href="mailto:hr@dv-s.com">hr@dv-s.com</a>
      <p className="footerM__convention">Developers 2018-2022 © All rights reserved</p>
    </div>
  );
};
