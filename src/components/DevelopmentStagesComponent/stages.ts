import { IStage } from '../../types/IStage';

export const stages: IStage[] = [
  {
    id: 1,
    title: '1. Анализ',
    description: 'Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение.',
    images: ['media/stagesImages/stages__item/1/arrowsSquare.png'],
  },
  {
    id: 2,
    title: '2. Визуальное решение',
    description: 'Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт.',
    images: ['media/stagesImages/stages__item/2/cake.png'],
  },
  {
    id: 3,
    title: '3. Техническая реализация',
    description: 'После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.',
    images: ['media/stagesImages/stages__item/3/barcode.png', 'media/stagesImages/stages__item/3/cylinder--blue.png', 'media/stagesImages/stages__item/3/cylinder--purple.png', 'media/stagesImages/stages__item/3/mobile.png', 'media/stagesImages/stages__item/3/sphere--big.png', 'media/stagesImages/stages__item/3/sphere--small.png', 'media/stagesImages/stages__item/3/wave.png'],
  },
  {
    id: 4,
    title: '4. Наполнение контентом',
    description: 'Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом.',
    images: ['media/stagesImages/stages__item/4/deposit--big.png', 'media/stagesImages/stages__item/4/deposit--small.png', 'media/stagesImages/stages__item/4/plus--big.png', 'media/stagesImages/stages__item/4/plus--small.png', 'media/stagesImages/stages__item/4/sphere--purple.png', 'media/stagesImages/stages__item/4/wallet.png', 'media/stagesImages/stages__item/4/wave.png'],
  },
  {
    id: 5,
    title: '5. Тестирование',
    description: 'Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.',
    images: ['media/stagesImages/stages__item/5/cylinder.png', 'media/stagesImages/stages__item/5/gear.png', 'media/stagesImages/stages__item/5/sphere.png'],
  },
];
