// @flow

const Strings = {
  TABS: {
    MAIN_DATA: 'Основные данные',
    ADDRESS: 'Адрес доставки',
  },

  MAIN_DATA: {
    NAME: {
      NAME: 'name',
      LABEL: 'Имя',
      PLACEHOLDER: 'Укажите имя',
    },
    SURNAME: {
      NAME: 'surname',
      LABEL: 'Фамилия',
      PLACEHOLDER: 'Укажите фамилию',
    },
    PHONE: {
      NAME: 'phone',
      LABEL: 'Телефон',
      MASK: 'phone',
      PLACEHOLDER: '123 456 - 78 - 90',
      PREFIX: '+7',
    },
    EMAIL: {
      NAME: 'email',
      LABEL: 'Email',
      PLACEHOLDER: 'example@example.com',
    },
  },

  ADDRESS: {
    DELIVERY: {
      NAME: 'delivery',
      LABEL: ['Доставка', 'Самовывоз'],
    },
    PICKUP: {
      NAME: 'pickup',
      LABEL: 'Самовывоз',
    },
    COUNTRY: {
      NAME: 'country',
      LABEL: 'Страна',
      ITEMS: [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', text: 'Antigua' },
        { key: 'ar', value: 'ar', text: 'Argentina' },
        { key: 'am', value: 'am', text: 'Armenia' },
        { key: 'aw', value: 'aw', text: 'Aruba' },
        { key: 'au', value: 'au', text: 'Australia' },
        { key: 'at', value: 'at', text: 'Austria' },
        { key: 'az', value: 'az', text: 'Azerbaijan' },
        { key: 'bs', value: 'bs', text: 'Bahamas' },
        { key: 'bh', value: 'bh', text: 'Bahrain' },
        { key: 'bd', value: 'bd', text: 'Bangladesh' },
        { key: 'bb', value: 'bb', text: 'Barbados' },
        { key: 'by', value: 'by', text: 'Belarus' },
        { key: 'be', value: 'be', text: 'Belgium' },
        { key: 'bz', value: 'bz', text: 'Belize' },
        { key: 'bj', value: 'bj', text: 'Benin' },
      ],
    },
    CITY: {
      NAME: 'city',
      LABEL: 'Город',
    },
    ZIP: {
      NAME: 'zip',
      LABEL: 'Индекс',
    },
    ADDRESS: {
      NAME: 'address',
      LABEL: 'Адрес',
    },
    DATE_DELIVERY: {
      NAME: 'dateDelivery',
      LABEL: 'Дата доставки',
    },
    DESCRIPTION: {
      NAME: 'description',
      LABEL: 'Комментарии к заказу',
    },
  },

  FORM: {
    SELECT: {
      PLACEHOLDER: 'Не выбрано',
    },
    TEXTAREA: {
      PLACEHOLDER: 'Ваш комментарий здесь...',
    },
    BUTTONS: {
      NEXT: 'Продолжить',
      SUBMIT: 'Оформить заказ',
    },

    VALIDATION: {
      EQUAL: (label, { equal }) => `Поле "${label} должно содержать символов - ${equal}"`,
      REQUIRED: label => `Поле "${label}" является обязательным для заполнения`,
      VALID_MASK: label => `Некорректно заполнено поле "${label}"`,
      VALID_EMAIL: () => `E-mail адрес указан неверно`,
    },
  },
};

export default Strings;
