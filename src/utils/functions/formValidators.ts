export const findNameError = (userInput: string) => {
  if (!userInput) {
    return 'Пожалуйста, введите свое имя';
  }

  return '';
};

export const findPhoneError = (userInput: string) => {
  if (!userInput) {
    return 'Пожалуйста, введите свой номер телефона';
  }

  if (Number.isNaN(Number(userInput))) {
    return 'Номер должен состоять из индекса страны и цифр. Пример: +380123456789';
  }

  if (userInput.length < 11) {
    return 'Номер должен содержать более 10 символов, не забудьте указать индекс вашей страны';
  }

  if (!userInput.includes('+')) {
    return 'Номер должен содержать индекс Вашей страны с символом "+" в начале. Пример: +380123456789';
  }

  return '';
};

export const findEmailError = (userInput: string) => {
  if (!userInput) {
    return 'Пожалуйста, введите свою электронную почту';
  }

  if (!userInput.includes('@') || !userInput.includes('.')) {
    return 'Пожалуйста, введите правильный адрес почты. Пример: name@gmail.com';
  }

  return '';
};
