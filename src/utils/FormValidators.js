import validator from 'validator';

export default {
  minValue: (minValue, message) => val => val < minValue && message,
  minLength:
    (min, message = `At least ${min} characters in length`) =>
    val =>
      val.length < min && message,
  email:
    (message = 'Please enter valid email.') =>
    val =>
      !validator.isEmail(val) && message,
  required:
    (message = 'This field is required') =>
    val =>
      !val && message,
  betweenLength: (min, max, message) => val => {
    if (val && (val.length < min || val.length > max)) {
      return message;
    }
    return undefined;
  },
  oneUpperCase:
    (message = 'At least one upper case character') =>
    val => {
      const pattern = new RegExp('(?=.*?[A-Z])');
      if (val && !pattern.test(val)) {
        return message;
      }
      return undefined;
    },
  oneLowerCase:
    (message = 'At least one lower case character') =>
    val => {
      const pattern = new RegExp('(?=.*?[a-z])');
      if (val && !pattern.test(val)) {
        return message;
      }
      return undefined;
    },
  oneSpecialCharacter:
    (message = 'At least one special character') =>
    val => {
      const pattern = new RegExp('(?=.*?[#?!@$%^&*-])');
      if (val && !pattern.test(val)) {
        return message;
      }
      return undefined;
    },
  oneDigit:
    (message = 'At least one digit') =>
    val => {
      const pattern = new RegExp('(?=.*?[0-9])');
      if (val && !pattern.test(val)) {
        return message;
      }
      return undefined;
    },
  validPhone:
    (message = 'Please input valid phone number') =>
    val => {
      const pattern = new RegExp('^[0-9]{10}$');
      if (val && !pattern.test(val)) {
        return message;
      }
      return undefined;
    },
  validateDecimalNumeric:
    (message = 'Please valid input') =>
    val => {
      const pattern = new RegExp('(^\\d+(\\.\\d{1,5})?$)');
      if (val && !pattern.test(val)) {
        return message;
      }
      return undefined;
    },
  validateNumeric:
    (message = 'Allow only numeric (0-9)') =>
    val => {
      const pattern = new RegExp('(^[0-9]+$)');
      if (val && !pattern.test(val)) {
        return message;
      }
      return undefined;
    },
  validateString:
    (message = 'Please valid input') =>
    val => {
      const pattern = new RegExp('(^[^-\\s][a-zA-Z0-9_\\s-]+$)');
      if (val && !pattern.test(val)) {
        return message;
      }
      return undefined;
    },
  selectedString:
    (message = 'Please Select option') =>
    val => {
      if (!val && val.length <= 0) {
        return message;
      }
      return undefined;
    },
  checkMultipleArray:
    (message = 'Please Select option') =>
    val => {
      if (!val && val.length <= 0) {
        return message;
      }
      return undefined;
    },
  comparePassword:
    (message = 'Passwords must match') =>
    (val1, val2) => {
      return val1 !== val2 && 'Passwords must match';
    },
  compareEmail:
    (message = 'Email must match') =>
    (val1, val2) => {
      return val1 !== val2 && 'Email must match';
    },
  isPasswordThanValidate: (message, min) => val => {
    if (!val) {
      return undefined;
    } else {
      return val.length < min && message;
    }
  },
  isValidPostalCode:
    (message = 'Enter valid postal code') =>
    val => {
      var postalCodeRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
      if (postalCodeRegex.test(val)) {
        return undefined;
      } else {
        return message;
      }
    },
  validateOtp:
    (message = 'Please input valid otp number') =>
    val => {
      const pattern = new RegExp('(^[0-9]{1,6}$)');
      if (val && !pattern.test(val)) {
        return message;
      }
      return undefined;
    },
};
