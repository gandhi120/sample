import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {checkPreDefinedValue} from '@utils/Constants';

class HeaderComponent extends Component {
  constructor(params) {
    super(params);
  }
  render() {
    const {headerTitle, subTitle, RightComponent} = this.props;
    return (
      <View style={styles.rootContainer}>
        <View style={styles.main}>
          {checkPreDefinedValue(headerTitle) ? (
            <Text style={styles.headerTitleText}>{headerTitle}</Text>
          ) : null}
          {checkPreDefinedValue(headerTitle) ? (
            <Text style={styles.headerSubTitleText}>{subTitle}</Text>
          ) : null}
        </View>
        {RightComponent ? <RightComponent /> : null}
      </View>
    );
  }
}

export default HeaderComponent;
