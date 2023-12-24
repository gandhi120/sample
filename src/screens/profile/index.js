import React, {useState} from 'react';
import {Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import HeaderComponent from '@components/HeaderComponent';
import {get} from 'lodash';
import {
  checkPreDefinedValue,
  validOnlyLettersWithSpace,
} from '@utils/Constants';
import {ScrollView} from 'native-base';
import {Dropdown} from 'react-native-element-dropdown';
import {Colors} from '@theme';
import ActionButton from '@actionButton';

const titleData = [
  {label: 'Mr', value: '1'},
  {label: 'Mrs', value: '2'},
  {label: 'Miss', value: '3'},
  {label: 'Dr', value: '4'},
  {label: 'Ms', value: '5'},
  {label: 'Prof.', value: '6'},
];
export const firstNameInputRef = React.createRef();
export const lastNameInputRef = React.createRef();

const Profile = props => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [firstNameValue, setFirstNameValue] = useState('');
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [lastNameValue, setLastNameValue] = useState('');
  const [lastNameValid, setLastNameValid] = useState(true);

  const renderLabel = label => {
    if (value || isFocus) {
      return <Text style={styles.label}>{label}</Text>;
    }
    return null;
  };

  const getShortName = name => {
    if (checkPreDefinedValue(name)) {
      const dividedName = name.split(' ');
      const finalName =
        dividedName.length > 1
          ? `${dividedName[0].charAt(0)}${dividedName[1].charAt(0)}`
          : `${dividedName[0].charAt(0)}`;
      return finalName;
    } else {
      return '';
    }
  };

  const onChangeFirstName = text => {
    setFirstNameValue(text !== '' && text !== undefined ? text.trimLeft() : '');
    const valid = validOnlyLettersWithSpace(text);
    setFirstNameValid(text.length > 0 ? valid : true);
  };
  const onChangeLastName = text => {
    setLastNameValue(text !== '' && text !== undefined ? text.trimLeft() : '');
    const valid = validOnlyLettersWithSpace(text);
    setLastNameValid(text.length > 0 ? valid : true);
  };

  const onBlurInput = () => {
    console.log('onBlurInput');
    firstNameInputRef.current.blur();
    setFirstNameFocus(false);
    lastNameInputRef.current.blur();
    setLastNameFocus(false);
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
          headerTitle={'Profile'}
          backEnable={true}
          onBackPress={() => onBack()}
        />
        <View style={styles.userInfoContainer}>
          <View style={styles.avatar}>
            <Text style={styles.shortName}>{getShortName('Varun Gandhi')}</Text>
          </View>
          <View>
            <Text style={styles.userName}>{'Your public profile'}</Text>
          </View>
        </View>
        <ScrollView style={styles.scroll}>
          {renderLabel('Title')}
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'gray'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={titleData}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Title' : ''}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(get(item, 'value'));
              setIsFocus(false);
            }}
          />

          <View style={styles.firstNameContainer}>
            {firstNameFocus || firstNameValue.length > 0 ? (
              <Text
                style={[
                  styles.label,
                  {color: firstNameValid ? 'green' : 'red'},
                ]}>
                {'First Name*'}
              </Text>
            ) : null}
            <TextInput
              ref={firstNameInputRef}
              value={firstNameValue}
              style={styles.firstName}
              placeholder={firstNameFocus ? '' : 'First Name*'}
              placeholderTextColor={Colors.primaryDark}
              onFocus={() => setFirstNameFocus(true)}
              onBlur={() => setFirstNameFocus(false)}
              onChangeText={text => onChangeFirstName(text)}
              contextMenuHidden={true}
            />
          </View>

          <View style={styles.firstNameContainer}>
            {lastNameFocus || lastNameValue.length > 0 ? (
              <Text
                style={[
                  styles.label,
                  {color: lastNameValid ? 'green' : 'red'},
                ]}>
                {'Last Name*'}
              </Text>
            ) : null}
            <TextInput
              ref={lastNameInputRef}
              value={lastNameValue}
              style={styles.firstName}
              placeholder={lastNameFocus ? '' : 'Last Name*'}
              placeholderTextColor={Colors.primaryDark}
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
              onChangeText={text => onChangeLastName(text)}
              contextMenuHidden={true}
            />
          </View>
          {/* mobile number */}
          <View style={styles.mobileNumber}>
            <Text style={styles.label}>{'Mobile Number'}</Text>
            <Text style={styles.phoneNumber}>{`+91  9725471103`}</Text>
          </View>

          {/* email number */}
          <View style={styles.mobileNumber}>
            <Text style={styles.label}>{'Email ID'}</Text>
            <Text style={styles.phoneNumber}>{`varungandhi120@gmail.com`}</Text>
          </View>

          {/* save changes */}
        </ScrollView>
        <View style={styles.emptyBox} />
        <ActionButton
          buttonStyle={styles.topButtonContainer}
          text={'SAVE CHANGES'}
          textStyle={styles.saveText}
          // disabled={this.disableRejectResponse}
          // onPress={() => onCrossModal()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;
