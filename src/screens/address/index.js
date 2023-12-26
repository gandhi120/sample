import React, {useState} from 'react';
import {Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import HeaderComponent from '@components/HeaderComponent';
import {
  NAME_LENGTH,
  validOnlyNumber,
  validOnlyLettersAndNumberWithSpace,
} from '@utils/Constants';
import {ScrollView} from 'native-base';
import {Colors} from '@theme';
import ActionButton from '@actionButton';
import ToastMessage from '@components/ToastMessage';

export const pinCodeInputRef = React.createRef();
export const houseNoInputRef = React.createRef();
export const streetNameInputRef = React.createRef();
export const cityNameInputRef = React.createRef();

const Address = props => {
  const [pinCodeFocus, setPinCodeFocus] = useState(false);
  const [pinCodeValue, setPinCodeValue] = useState('395009');
  const [pinCodeValid, setPinCodeValid] = useState(true);
  const [houseNoFocus, setHouseNoFocus] = useState(false);
  const [houseNoValue, setHouseNoValue] = useState('20');
  const [houseNoValid, setHouseNoValid] = useState(true);
  const [streetNameFocus, setStreetNameFocus] = useState(false);
  const [streetNameValue, setStreetNameValue] = useState('aahuranagar');
  const [streetNameValid, setStreetNameValid] = useState(true);
  const [cityNameFocus, setCityNameFocus] = useState(false);
  const [cityNameValue, setCityNameValue] = useState('surat');
  const [cityNameValid, setCityNameValid] = useState(true);

  const onChangePinCode = text => {
    setPinCodeValue(text !== '' && text !== undefined ? text.trimLeft() : '');
    const valid = validOnlyNumber(text, 10);
    setPinCodeValid(text.length > 0 ? valid : true);
  };

  const onChangeHouseNo = text => {
    setHouseNoValue(text !== '' && text !== undefined ? text.trimLeft() : '');
    const valid = validOnlyLettersAndNumberWithSpace(text);
    setHouseNoValid(text.length > 0 ? valid : true);
  };

  const onChangeStreetName = text => {
    setStreetNameValue(
      text !== '' && text !== undefined ? text.trimLeft() : '',
    );
    const valid = validOnlyLettersAndNumberWithSpace(text);
    setStreetNameValid(text.length > 0 ? valid : true);
  };

  const onChangeCityName = text => {
    setCityNameValue(text !== '' && text !== undefined ? text.trimLeft() : '');
    const valid = validOnlyLettersAndNumberWithSpace(text);
    setCityNameValid(text.length > 0 ? valid : true);
  };

  const onSaveChanges = () => {
    ToastMessage({message: 'Changes are saved', type: 'success'});
  };

  const onBlurInput = () => {
    pinCodeInputRef.current.blur();
    houseNoInputRef.current.blur();
    streetNameInputRef.current.blur();
    cityNameInputRef.current.blur();

    setPinCodeFocus(false);
    setHouseNoFocus(false);
    setStreetNameFocus(false);
    setCityNameFocus(false);
  };

  const onBack = () => {
    const {goBack} = props.navigation;
    goBack(null);
  };
  console.log('jjj');

  return (
    <TouchableWithoutFeedback onPress={() => onBlurInput()}>
      <View style={styles.rootContainer}>
        <HeaderComponent
          headerTitle={'Address'}
          backEnable={true}
          onBackPress={() => onBack()}
        />
        <ScrollView style={styles.scroll}>
          <View style={styles.pinCodeContainer}>
            {pinCodeFocus || pinCodeValue.length > 0 ? (
              <Text
                style={[
                  styles.label,
                  {color: pinCodeValid ? Colors.green : Colors.closeRed},
                ]}>
                {'Pincode*'}
              </Text>
            ) : null}
            <TextInput
              ref={pinCodeInputRef}
              value={pinCodeValue}
              style={styles.pinCode}
              placeholder={pinCodeFocus ? '' : 'Pincode*'}
              placeholderTextColor={Colors.primaryDark}
              onFocus={() => setPinCodeFocus(true)}
              onBlur={() => setPinCodeFocus(false)}
              onChangeText={text => onChangePinCode(text)}
              contextMenuHidden={true}
              maxLength={NAME_LENGTH}
              keyboardType="decimal-pad"
            />
          </View>
          {/* House NO */}
          <View style={styles.pinCodeContainer}>
            {houseNoFocus || houseNoValue.length > 0 ? (
              <Text
                style={[
                  styles.label,
                  {color: houseNoValid ? Colors.green : Colors.closeRed},
                ]}>
                {'House no,Block,Floor,Building Name*'}
              </Text>
            ) : null}
            <TextInput
              ref={houseNoInputRef}
              value={houseNoValue}
              style={styles.pinCode}
              placeholder={
                houseNoFocus ? '' : 'House no,Block,Floor,Building Name*'
              }
              placeholderTextColor={Colors.primaryDark}
              onFocus={() => setHouseNoFocus(true)}
              onBlur={() => setHouseNoFocus(false)}
              onChangeText={text => onChangeHouseNo(text)}
              contextMenuHidden={true}
              maxLength={NAME_LENGTH}
            />
          </View>
          {/* Street Name */}
          <View style={styles.pinCodeContainer}>
            {streetNameFocus || streetNameValue.length > 0 ? (
              <Text
                style={[
                  styles.label,
                  {color: streetNameValid ? Colors.green : Colors.closeRed},
                ]}>
                {'Street Name ,Area, Locality*'}
              </Text>
            ) : null}
            <TextInput
              ref={streetNameInputRef}
              value={streetNameValue}
              style={styles.pinCode}
              placeholder={
                streetNameFocus ? '' : 'Street Name ,Area, Locality*'
              }
              placeholderTextColor={Colors.primaryDark}
              onFocus={() => setStreetNameFocus(true)}
              onBlur={() => setStreetNameFocus(false)}
              onChangeText={text => onChangeStreetName(text)}
              contextMenuHidden={true}
              maxLength={NAME_LENGTH}
              //   keyboardType="decimal-pad"
            />
          </View>

          {/* City Name */}
          <View style={styles.pinCodeContainer}>
            {cityNameFocus || cityNameValue.length > 0 ? (
              <Text
                style={[
                  styles.label,
                  {color: cityNameValid ? Colors.green : Colors.closeRed},
                ]}>
                {'City Name*'}
              </Text>
            ) : null}
            <TextInput
              ref={cityNameInputRef}
              value={cityNameValue}
              style={styles.pinCode}
              placeholder={cityNameFocus ? '' : 'City Name*'}
              placeholderTextColor={Colors.primaryDark}
              onFocus={() => setCityNameFocus(true)}
              onBlur={() => setCityNameFocus(false)}
              onChangeText={text => onChangeCityName(text)}
              contextMenuHidden={true}
              maxLength={NAME_LENGTH}
            />
          </View>

          {/* save changes */}
        </ScrollView>
        <View style={styles.emptyBox} />
        <ActionButton
          buttonStyle={styles.topButtonContainer}
          text={'SAVE CHANGES'}
          textStyle={styles.saveText}
          // disabled={this.disableRejectResponse}
          onPress={() => onSaveChanges()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Address;
