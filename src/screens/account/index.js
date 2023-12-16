import React from 'react';
import {Text, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';

const renderRightComponent = () => {
  return (
    <View>
      <ActionButton
        // onPress={this.pushToImages}
        buttonStyle={styles.loginButtonContainer}
        // icon="next"
        // iconType="digiQc"
        // iconStyle={styles.nextTickIcon}
        text={'Log in'}
        textStyle={styles.loginText}
        disabled={false}
      />
    </View>
  );
};
const Account = () => {
  return (
    <View style={styles.rootContainer}>
      <HeaderComponent
        headerTitle={'Account'}
        subTitle={'Log in to get exclusive offers'}
        RightComponent={() => renderRightComponent()}
      />
      <Text>{'Contact screen!'}</Text>
    </View>
  );
};

export default Account;
