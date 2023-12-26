import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import HeaderComponent from '@components/HeaderComponent';
import {
  checkPreDefinedValue,
  validOnlyLettersWithSpace,
  validEmail,
  NAME_LENGTH,
  EMAIL_LENGTH,
} from '@utils/Constants';
import {ScrollView} from 'native-base';
import {Colors} from '@theme';
import ActionButton from '@actionButton';
import ToastMessage from '@components/ToastMessage';

export const lastNameInputRef = React.createRef();
export const emailIdInputRef = React.createRef();

const Profile = props => {
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [lastNameValue, setLastNameValue] = useState('Varun Gandhi');
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailIdFocus, setEmailIdFocus] = useState(false);
  const [emailIdValue, setEmailIdValue] = useState('Varungandhi120@gmail.com');
  const [emailIdValid, setEmailIdValid] = useState(true);

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

  const onChangeLastName = text => {
    setLastNameValue(text !== '' && text !== undefined ? text.trimLeft() : '');
    const valid = validOnlyLettersWithSpace(text);
    setLastNameValid(text.length > 0 ? valid : true);
  };

  const onChangeEmailId = text => {
    setEmailIdValue(text !== '' && text !== undefined ? text.trimLeft() : '');
    const valid = validEmail(text);
    setEmailIdValid(text.length > 0 ? valid : true);
  };
  const onVerify = () => {
    ToastMessage({message: 'Please check your mail', type: 'success'});
  };
  const onSaveChanges = () => {
    ToastMessage({message: 'Changes are saved', type: 'success'});
  };

  const onBlurInput = () => {
    lastNameInputRef.current.blur();
    emailIdInputRef.current.blur();
    setLastNameFocus(false);
    setEmailIdFocus(false);
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
          <View style={styles.firstNameContainer}>
            {lastNameFocus || lastNameValue.length > 0 ? (
              <Text
                style={[
                  styles.label,
                  {color: lastNameValid ? Colors.green : Colors.closeRed},
                ]}>
                {'Name*'}
              </Text>
            ) : null}
            <TextInput
              ref={lastNameInputRef}
              value={lastNameValue}
              style={styles.firstName}
              placeholder={lastNameFocus ? '' : 'Name*'}
              placeholderTextColor={Colors.primaryDark}
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
              onChangeText={text => onChangeLastName(text)}
              contextMenuHidden={true}
              maxLength={NAME_LENGTH}
            />
          </View>
          {/* mobile number */}
          <View style={styles.mobileNumber}>
            <Text style={styles.label}>{'Mobile Number'}</Text>
            <Text style={styles.phoneNumber}>{`+91  9725471103`}</Text>
          </View>

          {/* email number */}
          <View style={styles.firstNameContainer}>
            {emailIdFocus || emailIdValue.length > 0 ? (
              <Text
                style={[
                  styles.label,
                  {color: emailIdValid ? Colors.green : Colors.closeRed},
                ]}>
                {'Email ID*'}
              </Text>
            ) : null}
            <View style={styles.emailContainer}>
              <TextInput
                ref={emailIdInputRef}
                value={emailIdValue}
                style={styles.emailInput}
                placeholder={emailIdFocus ? '' : 'varun121@gmail.com'}
                placeholderTextColor={Colors.primaryDark}
                onFocus={() => setEmailIdFocus(true)}
                onBlur={() => setEmailIdFocus(false)}
                onChangeText={text => onChangeEmailId(text)}
                contextMenuHidden={true}
                maxLength={EMAIL_LENGTH}
              />
              <TouchableOpacity
                style={styles.verifyContainer}
                onPress={() => onVerify()}>
                <Text style={styles.verifyText}>{'VERIFY'}</Text>
              </TouchableOpacity>
            </View>
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

export default Profile;
