/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { TextField } from '@material-ui/core';
import React, { FormEventHandler, useState } from 'react';
// import TextField from '@material-ui/core/TextField';

import './OrderComponent.scss';

export const OrderComponent = () => {
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [requestWasSent, setRequestWasSent] = useState<boolean>(false);

  const handleNameInput = (input: string) => {
    setNameError(false);
    setUserName(input);
  };

  const handlePhoneInput = (input: string) => {
    setPhoneError(false);
    setUserPhone(input);
  };

  const handleEmailInput = (input: string) => {
    setEmailError(false);
    setUserEmail(input);
  };

  const resetForm = () => {
    setUserName('');
    setUserPhone('');
    setUserEmail('');
  };

  const setFormErrors = () => {
    if (!userName) {
      setNameError(true);
    }

    if (!userPhone) {
      setPhoneError(true);
    }

    if (!userEmail) {
      setEmailError(true);
    }
  };

  const removeFormErrors = () => {
    setNameError(false);
    setPhoneError(false);
    setEmailError(false);
  };

  const isFormValid = () => {
    if (userName && userPhone && userEmail) {
      return true;
    }

    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      removeFormErrors();
      resetForm();
      setRequestWasSent(true);
    }

    if (!isFormValid()) {
      setFormErrors();
    }
  };

  return (
    <div className="order">
      <h2 className="order__title">
        Обсудить проект
      </h2>
      <p className="order__text">
        Расскажите о своих бизнес-целях и мы поможем
        <br />
        вам в их достижении
      </p>
      {
        requestWasSent ? <div className="p">Заявка была отправлена!</div> : null
      }
      <form
        className="order__form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => handleNameInput(e.target.value)}
          id="outlined-basic"
          label="Имя"
          variant="outlined"
          required
          error={nameError}
          value={userName}
        />
        <TextField
          onChange={(e) => handlePhoneInput(e.target.value)}
          id="outlined-basic"
          label="Telegram/Viber"
          variant="outlined"
          required
          error={phoneError}
          value={userPhone}
        />
        <TextField
          onChange={(e) => handleEmailInput(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
          error={emailError}
          value={userEmail}
        />
        <button type="submit">Отправить</button>
      </form>
      <img src="media/orderImages/phoneCall.png" className="order__image" alt="" />
      <img src="media/orderImages/sphere.png" className="order__image" alt="" />
      <img src="media/orderImages/wave.png" className="order__image" alt="" />
    </div>
  );
};
