import {View} from 'native-base';
import React from 'react';
import {Keyboard, SafeAreaView, Text, TouchableOpacity} from 'react-native';
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
const LoginModal = inject()(
  observer(props => {
    /* UI Design Code */
    // const [count, setCount] = useState(0);

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
      //   return this.showIndicator;
      // } else if (this.otpSend) {
      //   const otp = this.formState.$.otp.value;
      //   return !(!isEmpty(this.formState.$.otp.value) && otp.length === 6);
      // } else {
      const phoneNumber = formState.$.phone.value;
      return !(!isEmpty(formState.$.phone.value) && phoneNumber.length === 10);
      // }
    };

    const submitForm = (isSendAgain = false) => {
      // setCount(count + 1);
      // logger.info('--submitForm function:--' + JSON.stringify(isSendAgain));
      const {appStore} = props;
      Keyboard.dismiss();
      // if (appStore.networkStatus) {
      // if (this.onVerificationDebounce) {
      // if (this.otpSend && !isSendAgain) {
      //   this.sendOtpForVerification();
      // } else {
      sendMobileNumberForOtp();
      // }
      // }
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

    const sendMobileNumberForOtp = () => {
      console.log('sendMobileNumberForOtp');
      // logger.info('--sendMobileNumberForOtp function:--');
      // this.setDebounceForVerification(false);
      // const { userStore } = this.props;
      // console.log('formState123', formState);
      formState.$.phone.validate();
      console.log('formState', formState);
      const phoneNumber = formState.$.phone.value;
      // console.log('phoneNumber', phoneNumber);
      if (
        phoneNumber &&
        phoneNumber.length === 10 &&
        !formState.$.phone.hasError
      ) {
        const number = normalizePhoneNumber(phoneNumber);
        const body = {
          country: 'IN',
          phoneNo: validateAndAddCountryCode(number),
        };
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

    const {visible, onClose} = props;
    console.log('formState.$.phone', formState.$.phone);
    return (
      <Modal
        isVisible={visible}
        style={styles.container}
        // onModalHide={() => this.setCameraSheet(false)}
        // onModalShow={this.onModalShow}
        avoidKeyboard={false}
        // onRequestClose={() => this.onCrossModal()}
      >
        <View style={styles.subContainer}>
          <SafeAreaView />
          <View style={styles.header}>
            <View style={styles.emptyContainer} />

            <View>
              <Text style={styles.headerText}>{'Advaita'}</Text>
            </View>
            <View>
              <ActionButton
                buttonStyle={styles.topButtonContainer}
                icon="circleCancel"
                iconType="sample"
                iconStyle={styles.closeIcon}
                // disabled={this.disableRejectResponse}
                onPress={() => onClose()}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.phoneText}>{'Enter your phone number'}</Text>
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
                {this.otpSend ? 'Confirm' : 'Send me the code'}
              </Text>
              {/* )} */}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }),
);

export default LoginModal;
