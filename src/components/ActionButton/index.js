import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CustomIcon from '@customIcon';
export default class ActionButton extends Component {
  renderHeader = () => {
    const {
      icon,
      iconType,
      text,
      subtext,
      buttonStyle,
      textStyle,
      subtextStyle,
      iconStyle,
      onPress,
      opacity = 0.2,
      disabled = false,
      isShowIconFirst = false,
      testId = '',
      numberOfLines,
    } = this.props;
    if (isShowIconFirst) {
      return (
        <TouchableOpacity
          testID={testId}
          id={testId}
          style={buttonStyle}
          activeOpacity={opacity}
          disabled={disabled}
          onPress={onPress}>
          <CustomIcon name={icon} type={iconType} style={iconStyle} />
          <Text style={textStyle}>{text}</Text>
          {subtext ? <Text style={subtextStyle}>{subtext}</Text> : null}
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          testID={testId}
          id={testId}
          style={buttonStyle}
          activeOpacity={opacity}
          disabled={disabled}
          onPress={onPress}>
          {numberOfLines ? (
            <Text numberOfLines={numberOfLines} style={textStyle}>
              {text}
            </Text>
          ) : (
            <Text style={textStyle}>{text}</Text>
          )}
          <CustomIcon name={icon} type={iconType} style={iconStyle} />
          {subtext ? <Text style={subtextStyle}>{subtext}</Text> : null}
        </TouchableOpacity>
      );
    }
  };
  render() {
    const {
      icon,
      iconType,
      text,
      subtext,
      buttonStyle,
      textStyle,
      subtextStyle,
      iconStyle,
      onPress,
      opacity = 0.2,
      disabled = false,
      testId = '',
      numberOfLines,
      onLongPress,
    } = this.props;

    if (icon && text) {
      return this.renderHeader();
    } else if (icon && subtext) {
      return (
        <TouchableOpacity
          testID={testId}
          id={testId}
          style={buttonStyle}
          activeOpacity={opacity}
          disabled={disabled}
          onPress={onPress}>
          {subtext ? <Text style={subtextStyle}>{subtext}</Text> : null}
          <CustomIcon name={icon} type={iconType} style={iconStyle} />
        </TouchableOpacity>
      );
    } else if (!icon && text) {
      return (
        <TouchableOpacity
          testID={testId}
          id={testId}
          style={buttonStyle}
          activeOpacity={opacity}
          disabled={disabled}
          onLongPress={onLongPress}
          onPress={onPress}>
          {numberOfLines ? (
            <Text numberOfLines={numberOfLines} style={textStyle}>
              {text}
            </Text>
          ) : (
            <Text style={textStyle}>{text}</Text>
          )}
        </TouchableOpacity>
      );
    } else if (icon && !text) {
      return (
        <TouchableOpacity
          testID={testId}
          id={testId}
          style={buttonStyle}
          activeOpacity={opacity}
          disabled={disabled}
          onPress={onPress}>
          <CustomIcon name={icon} type={iconType} style={iconStyle} />
        </TouchableOpacity>
      );
    } else {
      return <></>;
    }
  }
}
