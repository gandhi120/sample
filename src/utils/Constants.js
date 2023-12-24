export const APPLE_ID = '1522416942';
export const productName = 'Advaita';
export const settings = [
  {
    label: 'ACCOUNT',
    item: [
      {id: 1, itemLabel: 'Profile', iconName: 'user', iconType: 'FontAwesome'},
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
      {itemLabel: 'Rate our app', iconName: '', iconType: ''},
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

export const validOnlyNumber = val => {
  const pattern = new RegExp('(^[0-9]{1,4}$)');
  return val && pattern.test(val);
};
export const validOnlyLettersWithSpace = val => {
  const pattern = new RegExp(/^[a-zA-Z\s]*$/);
  return val && pattern.test(val);
};
export const otpLength = 4;

export const checkPreDefinedValue = value =>
  value !== undefined && value !== null && value !== '';
