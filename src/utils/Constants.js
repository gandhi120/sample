import Images from '@theme/images';
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

export const SIZE_CONTAINER = [
  {id: 1, size: 'S'},
  {id: 2, size: 'M'},
  {id: 3, size: 'L'},
  {id: 4, size: 'XL'},
  {id: 5, size: 'XXL'},
];

export const TITLE_BAR_ITEM = [
  {
    id: 1,
    title: 'Bitcoin',
    type: 'cryptoTrade',
    subTitle: '$5438',
    currentUpDown: '+0.23',
    imageUri: Images.bitcoin,
  },
  {
    id: 2,
    title: 'IPL',
    type: 'sports',
    subTitle: '2024',
    imageUri: Images.cricket,
  },
  {
    id: 3,
    title: 'Ethereum',
    type: 'cryptoTrade',
    subTitle: '$5438',
    currentUpDown: '+0.23',
    imageUri: Images.ethereum,
  },
  {
    id: 4,
    title: `Men's world cup`,
    type: 'sports',
    subTitle: 'Cricket',
    imageUri: Images.cricket,
  },
  {
    id: 5,
    title: 'Champion league',
    type: 'sports',
    subTitle: 'Football',
    imageUri: Images.football,
  },
];

export const QUESTION = [
  {
    question: 'Kolkata to win the match vs Mumbai?',
    subTitle: 'H2H last 5 T20 : Kolkata 4,Mumbai 1, DRAW 0',
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
