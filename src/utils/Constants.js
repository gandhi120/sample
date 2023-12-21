export const APPLE_ID = '1522416942';

export const validOnlyNumber = val => {
  const pattern = new RegExp('(^[0-9]{1,4}$)');
  return val && pattern.test(val);
};
export const otpLength = 4;

export const checkPreDefinedValue = value =>
  value !== undefined && value !== null && value !== '';
