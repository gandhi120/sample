export const APPLE_ID = '1522416942';
export const productName = 'Advaita';
export const NAME_LENGTH = 250;
export const MAX_TEXTAREA_LENGTH = 255;
export const EMAIL_LENGTH = 100;

export const CONTACT_US_NUMBER = '9725471103';
export const CONTACT_US_NAME = 'Varun';

export const settings = [
  {
    label: 'ACCOUNT',
    item: [
      {id: 1, itemLabel: 'Profile', iconName: 'user', iconType: 'sample'},
      {id: 2, itemLabel: 'Address', iconName: 'location', iconType: 'sample'},
      {
        id: 3,
        itemLabel: 'SeparateLine',
        iconName: '',
        iconType: '',
      },
    ],
  },
  {
    label: 'HELP & MORE',
    item: [
      {itemLabel: 'Help', iconName: '', iconType: ''},
      // {itemLabel: 'Rate our app', iconName: '', iconType: ''},
      {
        itemLabel: 'SeparateLine',
        iconName: '',
        iconType: '',
      },
    ],
  },
  {
    label: '',
    item: [
      {itemLabel: 'Sign Out', iconName: '', iconType: ''},
      {itemLabel: 'App Version 1.0.0', iconName: '', iconType: ''},
    ],
  },
];
export const calculatePerMonth = val => {
  const perMonth = Math.floor(val / 12);
  return replaceIndianFormate(perMonth);
};
export const replaceIndianFormate = val => {
  const finalValue = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return finalValue;
};

export const validOnlyNumber = (val, maxLength) => {
  const pattern = new RegExp(`(^[0-9]{1,${maxLength}}$)`);
  return val && pattern.test(val);
};

export const validNumber = val => {
  const pattern = new RegExp('(^[0-9]{1,10}$)');
  return val && pattern.test(val);
};

export const validEmail = val => {
  const pattern = new RegExp(/[a-z0-9]+@[a-z]+.com/g);
  return val && pattern.test(val);
};

export const validOnlyLettersWithSpace = val => {
  const pattern = new RegExp(/^[a-zA-Z\s]*$/);
  return val && pattern.test(val);
};
export const validOnlyLettersAndNumberWithSpace = val => {
  const pattern = new RegExp(/^[a-zA-Z0-9\s]*$/);
  return val && pattern.test(val);
};
export const otpLength = 4;

export const checkPreDefinedValue = value =>
  value !== undefined && value !== null && value !== '';
