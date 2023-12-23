import {View} from 'native-base';
import React, {useState, useRef, useEffect} from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import {Colors} from '@theme';
import TextField from '@components/TextField';
import {FieldState, FormState} from 'formstate';
import validators from '@utils/FormValidators';
import Form from '@utils/Form';
import {isEmpty} from 'lodash';
import {inject, observer} from 'mobx-react';
// import {action, makeObservable, observable} from 'mobx';
import ActionButton from '@actionButton';
import {validOnlyNumber, otpLength, productName} from '@utils/Constants';

let formState = {};

formState = new FormState({
  phone: new FieldState()
    .disableAutoValidation()
    .validators(
      validators.required('Phone number required.'),
      validators.validPhone(),
    ),
  otp: new FieldState()
    .disableAutoValidation()
    .validators(validators.required('otp required.'), validators.validateOtp()),
});
const LoginModal = inject('userStore')(
  observer(props => {
    const {userStore} = props;
    console.log('userStore.numberVerified112', userStore);
    /* UI Design Code */
    const [sendForOtp, setSendForOtp] = useState(false);
    const [verificationDebounce, setVerificationDebounce] = useState(true);
    // const [isSendAgain, setIsSendAgain] = useState(false);
    const [count, setCount] = useState(0);
    const [otpOne, setOtpOneValue] = useState('');
    const [otpTwo, setOtpTwoValue] = useState('');
    const [otpThree, setOtpThreeValue] = useState('');
    const [otpFour, setOtpFourValue] = useState('');
    const [showOtpError, setShowOtpError] = useState(false);
    useEffect(() => {
      const interval = setInterval(() => {
        if (count === 0) {
          clearInterval(interval);
        } else {
          setCount(count - 1);
        }
      }, 1000);
      return () => {
        console.log('return');
        clearInterval(interval);
      };
    }, [count]);

    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    console.log('et1', et1);
    const form = new Form(formState);

    const resetError = () => {
      formState.$.phone.error = undefined;
      formState.$.phone.hasError = false;
      formState.$.otp.error = undefined;
      formState.$.otp.hasError = false;
      checkEmpty();
    };

    const checkEmpty = () => {
      // if (this.showIndicator) {
      //   return this.showIndicator;*
      // } else if
      if (sendForOtp) {
        // const otp = formState.$.otp.value;
        const otp = `${otpOne}${otpTwo}${otpThree}${otpFour}`;
        return !(otp.length === otpLength);
      } else {
        const phoneNumber = formState.$.phone.value;
        return !(
          !isEmpty(formState.$.phone.value) && phoneNumber.length === 10
        );
      }
    };

    const submitForm = (isSendAgain = false) => {
      // setCount(count + 1);
      // logger.info('--submitForm function:--' + JSON.stringify(isSendAgain));
      // const {appStore} = props;
      Keyboard.dismiss();
      // if (appStore.networkStatus) {
      if (verificationDebounce) {
        if (sendForOtp) {
          sendOtpForVerification();
        } else {
          sendMobileNumberForOtp();
        }
      }
      // } else {
      //   logger.info('--networkStatus--' + appStore.networkStatus);
      //   ToastMessage({
      //     message:
      //       'You are not connected to internet. Please check your internet connection and try again later.',
      //     type: 'danger',
      //     duration: 7000,
      //   });
      // }
    };

    const sendMobileNumberForOtp = async () => {
      // logger.info('--sendMobileNumberForOtp function:--');
      setVerificationDebounce(false);
      // const { userStore } = this.props;
      await formState.$.phone.validate();
      const phoneNumber = formState.$.phone.value;
      if (
        phoneNumber &&
        phoneNumber.length === 10 &&
        !formState.$.phone.error
      ) {
        console.log('number111');
        const number = normalizePhoneNumber(phoneNumber);
        console.log('number', number);

        const body = {
          country: 'IN',
          phoneNo: validateAndAddCountryCode(number),
        };
        setSendForOtp(true);
        setCount(60);
        setVerificationDebounce(true);

        // logger.info('--sendMobileNumberForOtp body:--' + JSON.stringify(body));
        // this.setIndicator(true);
        // try {
        //   const isSentForOtp = await verifyMobileNumber(userStore.authToken, JSON.stringify(body));
        //   logger.info('--isSentForOtp:--' + JSON.stringify(isSentForOtp));

        //   if (get(isSentForOtp, 'status') === RESPONSE_STATUS.SUCCESS) {
        //     logger.info('--MobileNumber verified--' + JSON.stringify(get(isSentForOtp, 'message')));
        //     ToastMessage({
        //       message: get(isSentForOtp, 'message'),
        //       type: 'success',
        //       duration: 3000,
        //     });
        //     this.setIndicator(false);
        //     this.setOtpSend(true);
        //   } else {
        //     this.setIndicator(false);
        //   }
        // } catch (error) {
        //   this.setIndicator(false);
        //   logger.error('--verifiedMobileNumber catch error1--' + error);
        //   recordErrorToSentry('--verifiedMobileNumber error2--' + error);
        // }
        // this.setDebounceForVerification(true);
      }
      // else {
      //   this.setDebounceForVerification(true);
      // }
      // }, 0);
    };

    const sendOtpForVerification = () => {
      const valid = validOnlyNumber(`${otpOne}${otpTwo}${otpThree}${otpFour}`);
      if (valid) {
        //is for valid number part..
        onCrossModal();
      } else {
        setShowOtpError(true);
      }
    };

    const normalizePhoneNumber = phone => {
      if (phone !== null && phone !== '') {
        let phoneNumber = '';
        const newPhone = phone.toString();

        if (newPhone && newPhone.charAt(0) === '+') {
          //normalize string and remove all unnecessary characters
          phoneNumber = newPhone.replace(/[^a-zA-Z0-9+]/g, '').substr(3);

          //reformat and return phone number
        } else {
          phoneNumber = newPhone.replace(/[^a-zA-Z0-9]/g, '');
          if (phoneNumber.charAt(0) === '0') {
            phoneNumber = phoneNumber.slice(1);
          }
        }
        return phoneNumber;
      }
      return phone;
    };

    const validateAndAddCountryCode = number => {
      const numberStr = number.toString();
      const countryCode = '+91';

      let newNumber = '';
      if (numberStr.charAt(0) !== '+') {
        if (numberStr.charAt(0) === '0') {
          newNumber = numberStr.slice(1);
          newNumber = countryCode + newNumber;
        } else {
          newNumber = countryCode + numberStr;
        }
      } else {
        newNumber = numberStr;
      }
      return newNumber;
    };

    const onEdit = () => {
      //on edit
      setSendForOtp(!sendForOtp);
      setCount(0);
      setVerificationDebounce(true);
    };

    const renderOtpContainer = () => {
      return (
        <>
          <Text style={styles.otpTitle}>
            {`Enter the verification code we've sent you on  ${'+91'} - ${
              formState.$.phone.value
            } `}{' '}
            <Text style={styles.editText} onPress={onEdit}>
              {'Edit'}
            </Text>
          </Text>
          <View style={styles.textInputWholeContainer}>
            <TextInput
              style={styles.otpInput}
              ref={et1}
              onChangeText={text => {
                setOtpOneValue(text);
                text !== '' ? et2.current.focus() : null;
                setShowOtpError(false);
              }}
              value={otpOne}
              placeholder="0"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.otpInput}
              ref={et2}
              onChangeText={text => {
                setOtpTwoValue(text);
                text !== '' ? et3.current.focus() : null;
                setShowOtpError(false);
              }}
              value={otpTwo}
              placeholder="0"
              keyboardType="numeric"
              maxLength={1}
              onKeyPress={e => {
                if (e.nativeEvent.key === 'Backspace' && otpTwo.length === 0) {
                  et1.current.focus();
                }
              }}
            />
            <TextInput
              style={styles.otpInput}
              ref={et3}
              onChangeText={text => {
                console.log('text', text);
                setOtpThreeValue(text);
                text !== '' ? et4.current.focus() : null;
                setShowOtpError(false);
              }}
              value={otpThree}
              placeholder="0"
              keyboardType="numeric"
              maxLength={1}
              onKeyPress={e => {
                if (
                  e.nativeEvent.key === 'Backspace' &&
                  otpThree.length === 0
                ) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              style={styles.otpInput}
              ref={et4}
              onChangeText={text => {
                setOtpFourValue(text);
                setShowOtpError(false);
              }}
              value={otpFour}
              placeholder="0"
              keyboardType="numeric"
              maxLength={1}
              onKeyPress={e => {
                if (e.nativeEvent.key === 'Backspace' && otpFour.length === 0) {
                  et3.current.focus();
                }
              }}
            />
          </View>

          {showOtpError ? (
            <Text style={styles.errorMsg}>{'Please input valid otp'}</Text>
          ) : null}
        </>
      );
    };

    const onCrossModal = () => {
      const {onClose} = props;
      onClose();
    };

    const {visible} = props;
    return (
      <Modal
        isVisible={visible}
        style={styles.container}
        // onModalHide={() => this.setCameraSheet(false)}
        // onModalShow={this.onModalShow}
        avoidKeyboard={true}
        onRequestClose={() => onCrossModal()}>
        <View style={styles.subContainer}>
          <View style={styles.header}>
            <View style={styles.emptyContainer} />

            <View>
              <Text style={styles.headerText}>{productName}</Text>
            </View>
            <View>
              <ActionButton
                buttonStyle={styles.topButtonContainer}
                icon="circleCancel"
                iconType="sample"
                iconStyle={styles.closeIcon}
                // disabled={this.disableRejectResponse}
                onPress={() => onCrossModal()}
              />
            </View>
          </View>
          {/* {sendForOtp ? (
            renderOtpContainer()
          ) : ( */}
          <View style={styles.infoContainer}>
            {sendForOtp ? (
              renderOtpContainer()
            ) : (
              <>
                <Text style={styles.phoneText}>
                  {'Enter your phone number'}
                </Text>
                <TextField
                  maxLength={10}
                  placeholder={'9725671103'}
                  fieldState={formState.$.phone}
                  inputOptions={{
                    style: styles.inputCtrl,
                    placeholderTextColor: Colors.strokeColor,
                    selectionColor: Colors.selected,
                    autoCapitalize: 'none',
                    keyboardType: 'phone-pad',
                    // ref: ref => this.setInputRef(ref, 'phone'),
                    blurOnSubmit: false,
                    returnKeyType: 'next',
                    // onBlur: () => {
                    //   this.onBlur();
                    // },
                    // onSubmitEditing: () => this.submitForm(),
                  }}
                  headerText={'Phone Number'}
                  errorStyle={styles.errorMsg}
                  rightText={'+91'}
                  // imageIcon={Images.bharatImage}
                  // iconStyle={styles.bharatIconStyle}
                  onChangeTextField={() => resetError()}
                />
              </>
            )}

            <TouchableOpacity
              style={[
                styles.nextButtonContainer,
                {
                  backgroundColor: checkEmpty()
                    ? Colors.strokeColor
                    : Colors.skyBlue,
                },
              ]}
              onPress={() => submitForm()}
              disabled={checkEmpty()}>
              {/* {this.showIndicator ? (
              <ActivityIndicator size="large" animating={true} color="white" />
            ) : ( */}
              <Text style={styles.nextButtonText}>
                {sendForOtp ? 'Verify' : 'Send me the code'}
              </Text>
              {/* )} */}
            </TouchableOpacity>
            {sendForOtp ? (
              <TouchableOpacity style={styles.resendContainer}>
                <Text style={styles.resendText}>{`Resend ${count}`}</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.policyText}>
                {'I agree with your Terms of Service & Privacy Policy'}
              </Text>
            )}
          </View>
          {/* )} */}
        </View>
      </Modal>
    );
  }),
);

export default LoginModal;
