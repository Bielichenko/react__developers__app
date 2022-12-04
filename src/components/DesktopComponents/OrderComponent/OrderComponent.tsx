/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import cn from 'classnames';

import { TextField, Box } from '@material-ui/core';
import React, { FormEventHandler, useState } from 'react';
// import TextField from '@material-ui/core/TextField';

import './OrderComponent.scss';
import { findEmailError, findNameError, findPhoneError } from '../../../utils/functions/formValidators';
import inputStyles from '../../../utils/styles/stylesPacks/inputStyles';

export const OrderComponent = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [requestWasSent, setRequestWasSent] = useState<boolean>(false);

  const handleUserInput = (inputType: string, input: string): null => {
    switch (inputType) {
      case 'input--name':
        setUserName(input);
        break;
      case 'input--phone':
        setUserPhone(input);
        break;
      case 'input--email':
        setUserEmail(input);
        break;
      default: return null;
    }

    return null;
  };

  const resetForm = () => {
    setUserName('');
    setUserPhone('');
    setUserEmail('');
  };

  const setFormErrors = () => {
    setNameError(findNameError(userName));
    setPhoneError(findPhoneError(userPhone));
    setEmailError(findEmailError(userEmail));
  };

  const removeFormErrors = () => {
    setNameError('');
    setPhoneError('');
    setEmailError('');
  };

  const isFormValid = () => {
    if (!findNameError(userName) && !findPhoneError(userPhone) && !findEmailError(userEmail)) {
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
    <div className="order" id="order">
      <div className="order__formBlock">
        <h2 className="order__formBlock__title">
          Обсудить проект
        </h2>
        <p className="order__formBlock__text">
          Расскажите о своих бизнес-целях и мы поможем
          <br />
          вам в их достижении
        </p>
        {
          requestWasSent ? <div className="p">Заявка была отправлена!</div> : null
        }
        <form
          className="order__formBlock__form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            onChange={(e) => handleUserInput(e.target.id, e.target.value)}
            onFocus={() => setNameError('')}
            id="input--name"
            label="Имя"
            variant="outlined"
            required
            error={!!nameError}
            value={userName}
            sx={inputStyles}
          />
          <p className={cn('error', { 'error--name': nameError })}>{nameError}</p>
          <TextField
            className="form__input"
            onFocus={() => setPhoneError('')}
            onChange={(e) => handleUserInput(e.target.id, e.target.value)}
            id="input--phone"
            label="Telegram/Viber"
            variant="outlined"
            required
            error={!!phoneError}
            value={userPhone}
            sx={inputStyles}
          />
          <p className={cn('error', { 'error--phone': phoneError })}>{phoneError}</p>
          <TextField
            className="form__input"
            onFocus={() => setEmailError('')}
            onChange={(e) => handleUserInput(e.target.id, e.target.value)}
            id="input--email"
            label="Email"
            variant="outlined"
            required
            error={!!emailError}
            value={userEmail}
            sx={inputStyles}
          />
          <p className={cn('error', { 'error--email': emailError })}>{emailError}</p>
          <button className="order__formBlock__orderButton" type="submit">Отправить</button>
        </form>
      </div>
      <img src="media/orderImages/phoneCall.png" className="order__image order__image--phone" alt="" />
      <img src="media/orderImages/sphere.png" className="order__image order__image--sphere" alt="" />
      <img src="media/orderImages/wave.png" className="order__image order__image--wave" alt="" />
    </div>
  );
};
