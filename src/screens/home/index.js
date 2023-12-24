import React, {useState} from 'react';

import {Text, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';
import LoginModal from '@loginModal';
import AfterLogin from '@afterLogin';
import {inject, observer} from 'mobx-react';
import {productName} from '@utils/Constants';
import {get} from 'lodash';

const Home = inject('userStore')(
  observer(props => {
    const {userStore} = props;
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [afterLoginVisible, setAfterLoginVisible] = useState(false);

    const renderRightComponent = () => {
      return (
        <View>
          <ActionButton
            onPress={() =>
              userStore.numberVerified
                ? setAfterLoginVisible(true)
                : setLoginModalVisible(true)
            }
            buttonStyle={styles.loginButtonContainer}
            icon="user"
            iconType="FontAwesome"
            iconStyle={styles.userIcon}
          />
        </View>
      );
    };

    return (
      <View style={styles.rootContainer}>
        <HeaderComponent
          headerTitle={productName}
          RightComponent={() => renderRightComponent()}
        />
        <Text>{'HOME screen!'}</Text>
        <LoginModal
          visible={loginModalVisible}
          onClose={() => setLoginModalVisible(false)}
        />
        <AfterLogin
          visible={afterLoginVisible}
          onClose={() => setAfterLoginVisible(false)}
          navigation={get(props, 'navigation')}
        />
      </View>
    );
  }),
);

export default Home;
