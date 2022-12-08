import React from 'react';
import { LogoComponent } from '../LogoComponent/LogoComponent';

import './FooterComponent.scss';

export const FooterComponent = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__limitContainer">
        <div className="footer__contactsContainer">
          <div className="footer__logos">
            <div className="footer__logos__mainLogo">
              <LogoComponent />
            </div>
            <div className="footer__logos__messangersIcons messangersIcons">
              <div className="messangersIcons__wrapper">
                <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank"><img className="messangersIcons__wrapper__icon" src="media/footerImages/messengersImages/inst.png" alt="1" /></a>
              </div>
              <div className="messangersIcons__wrapper">
                <a href="https://uk-ua.facebook.com/" rel="noopener noreferrer" target="_blank"><img className="messangersIcons__wrapper__icon" src="media/footerImages/messengersImages/fb.png" alt="1" /></a>
              </div>
              <div className="messangersIcons__wrapper">
                <a href="https://web.telegram.org/" rel="noopener noreferrer" target="_blank"><img className="messangersIcons__wrapper__icon" src="media/footerImages/messengersImages/tg.png" alt="1" /></a>
              </div>
              <div className="messangersIcons__wrapper">
                <a href="https://www.viber.com/ru/" rel="noopener noreferrer" target="_blank">
                  <img className="messangersIcons__wrapper__icon" src="media/footerImages/messengersImages/vb.png" alt="1" />
                </a>
              </div>
              <div className="messangersIcons__wrapper">
                <a href="https://www.whatsapp.com/?lang=ru" rel="noopener noreferrer" target="_blank">
                  <img className="messangersIcons__wrapper__icon" src="media/footerImages/messengersImages/wtu.png" alt="1" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__viberContacts viberContacts">
            <div className="viberContacts__contact">
              <img className="viberContacts__contact__icon" src="media/footerImages/messengersImages/vb.png" alt="3" />
              <a className="viberContacts__contact__phone" href="tel:380505859409">Валерия: +380505859409</a>
            </div>
            <div className="viberContacts__contact">
              <img className="viberContacts__contact__icon" src="media/footerImages/messengersImages/vb.png" alt="3" />
              <a className="viberContacts__contact__phone" href="tel:+380505859409">Анна: +380505859409</a>
            </div>
            <div className="viberContacts__contact">
              <img className="viberContacts__contact__icon" src="media/footerImages/messengersImages/vb.png" alt="3" />
              <a className="viberContacts__contact__phone" href="tel:380505859409">Валерия: +380505859409</a>
            </div>
          </div>
          <div className="footer__emailWrapper">
            <a className="footer__email" href="mailto:hr@dv-s.com">hr@dv-s.com</a>
          </div>
        </div>
        <p className="footer__convention">Developers 2018-2022 © All rights reserved</p>
      </div>
    </div>
  );
};
