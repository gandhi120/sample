/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {Input} from 'native-base';
import CustomIcon from '@customIcon';
import styles from './styles';
import {Image, Text, View} from 'react-native';
import {Colors} from '@theme';

@observer
class TextField extends Component {
  constructor(props) {
    super(props);
    this.fieldValue = undefined;
  }
  render() {
    const {
      fieldState,
      placeholder,
      inputOptions,
      itemStyle,
      leftIcon,
      errorStyle,
      rightIcon,
      onRightIconPress,
      icon,
      iconType,
      iconStyle,
      headerText,
      mainStyle,
      innerContainer,
      rightIconType,
      rightIconStyle,
      secureTextEntry,
      testId = '',
      maxLength,
      rightText = '',
      imageIcon = '',
      onChangeTextField,
    } = this.props;
    this.fieldValue = fieldState.value;
    console.log('fieldState.error', fieldState.error);
    return (
      <View style={mainStyle}>
        {headerText ? <Text style={styles.textStyle}>{headerText}</Text> : ''}
        <View
          style={[
            styles.container,
            {backgroundColor: innerContainer ? Colors.white : 'transparent'},
          ]}>
          <View style={itemStyle}>
            <Input
              maxLength={maxLength}
              variant={'unstyled'}
              InputLeftElement={
                <View>
                  {leftIcon ? (
                    <View style={styles.leftContainer}>
                      <CustomIcon
                        name={icon}
                        type={iconType}
                        style={[
                          iconStyle,
                          leftIcon ? {paddingHorizontal: 10} : {},
                        ]}
                      />
                      <View style={styles.verticalSep} />
                    </View>
                  ) : null}
                  {imageIcon === '' ? (
                    <View
                      style={[
                        styles.leftContainer,
                        rightText !== '' ? {paddingHorizontal: 10} : {},
                      ]}>
                      {rightText !== '' ? (
                        <Text style={styles.iconTextStyle}>{rightText}</Text>
                      ) : null}
                      <View style={styles.verticalSep} />
                    </View>
                  ) : null}
                  {imageIcon !== '' ? (
                    <View
                      style={[
                        styles.leftContainer,
                        rightText !== '' ? {paddingHorizontal: 12} : {},
                      ]}>
                      <Image style={iconStyle} source={imageIcon} />
                      {rightText !== '' ? (
                        <Text style={styles.iconTextStyle}>{rightText}</Text>
                      ) : null}
                      <View style={styles.verticalSep} />
                    </View>
                  ) : null}
                </View>
              }
              InputRightElement={
                rightIcon && (
                  <CustomIcon
                    name={rightIcon}
                    type={rightIconType}
                    {...rightIcon}
                    style={rightIconStyle}
                    onPress={() => onRightIconPress && onRightIconPress()}
                  />
                )
              }
              {...inputOptions}
              testID={testId}
              id={testId}
              underlineColorAndroid="transparent"
              placeholder={placeholder || ''}
              style={styles.inputStyle}
              value={this.fieldValue}
              secureTextEntry={secureTextEntry}
              onChangeText={
                headerText.includes('Email') ||
                headerText.includes('Password') ||
                headerText.includes('email') ||
                headerText.includes('password')
                  ? value => {
                      if (onChangeTextField) {
                        onChangeTextField();
                      }
                      const newValue = value.replace(/ +/g, '');
                      fieldState.onChange(newValue);
                    }
                  : value => {
                      if (onChangeTextField) {
                        onChangeTextField();
                      }
                      fieldState.onChange(value);
                    }
              }
            />
          </View>
        </View>
        {fieldState.error && (
          <Text style={[styles.errorMsg, errorStyle]}>{fieldState.error}</Text>
        )}
      </View>
    );
  }
}

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  fieldState: PropTypes.object,
  inputOptions: PropTypes.object,
  itemStyle: PropTypes.object,
  leftIcon: PropTypes.object,
  errorStyle: PropTypes.object,
};

TextField.defaultProps = {
  inputOptions: {},
  itemStyle: null,
  leftIcon: null,
  errorStyle: {},
  floatingLabel: false,
};

export default TextField;
