export const findNameError = (userInput: string) => {
  if (!userInput) {
    return 'пожалуйста, введите свое имя';
  }

  return '';
};

export const findPhoneError = (userInput: string) => {
  if (!userInput) {
    return 'пожалуйста, введите свой номер телефона';
  }

  if (Number.isNaN(Number(userInput))) {
    return 'номер должен состоять из индекса страны и цифр. Пример: +380123456789';
  }

  if (userInput.length < 11) {
    return 'номер должен содержать более 10 символов, не забудьте указать индекс вашей страны';
  }

  if (!userInput.includes('+')) {
    return 'номер должен содержать индекс Вашей страны с символом "+" спереди. Пример: +380123456789';
  }

  return '';
};

export const findEmailError = (userInput: string) => {
  if (!userInput) {
    return 'пожалуйста, введите свою электронную почту';
  }

  if (!userInput.includes('@') || !userInput.includes('.')) {
    return 'пожалуйста, введите правильный адрес почты. Пример: name@gmail.com';
  }

  return '';
};
