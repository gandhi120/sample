import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {checkPreDefinedValue} from '@utils/Constants';
import ActionButton from '@actionButton';

class HeaderComponent extends Component {
  constructor(params) {
    super(params);
  }
  render() {
    const {
      headerTitle,
      subTitle,
      RightComponent,
      backEnable = false,
      onBackPress,
    } = this.props;
    return (
      <View style={styles.rootContainer}>
        <View style={styles.main}>
          {backEnable ? (
            <ActionButton
              buttonStyle={styles.topButtonContainer}
              icon="leftArrow"
              iconType="sample"
              iconStyle={styles.closeIcon}
              onPress={() => onBackPress()}
            />
          ) : null}

          {checkPreDefinedValue(headerTitle) ? (
            <Text style={styles.headerTitleText}>{headerTitle}</Text>
          ) : null}
          {checkPreDefinedValue(subTitle) ? (
            <Text style={styles.headerSubTitleText}>{subTitle}</Text>
          ) : null}
        </View>
        {RightComponent ? <RightComponent /> : null}
      </View>
    );
  }
}

export default HeaderComponent;
