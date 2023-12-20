import React, {useState} from 'react';

import {Text, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';
import LoginModal from '@loginModal';

const Account = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const renderRightComponent = () => {
    return (
      <View>
        <ActionButton
          onPress={() => setLoginModalVisible(true)}
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

  return (
    <View style={styles.rootContainer}>
      <HeaderComponent
        headerTitle={'Account'}
        subTitle={'Log in to get exclusive offers'}
        RightComponent={() => renderRightComponent()}
      />
      <Text>{'Contact screen!'}</Text>
      <LoginModal
        visible={loginModalVisible}
        onClose={() => setLoginModalVisible(false)}
      />
    </View>
  );
};

export default Account;
