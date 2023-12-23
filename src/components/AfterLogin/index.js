import {View} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import {inject, observer} from 'mobx-react';
import ActionButton from '@actionButton';

const AfterLogin = inject('userStore')(
  observer(props => {
    // const {userStore} = props;
    /* UI Design Code */
    // const [count, setCount] = useState(0);

    const onCrossModal = () => {
      const {onClose} = props;
      onClose();
    };

    const {visible} = props;
    return (
      <Modal
        isVisible={visible}
        style={styles.container}
        // onModalHide={() => this.setCameraSheet(false)}
        // onModalShow={this.onModalShow}
        avoidKeyboard={true}
        onRequestClose={() => onCrossModal()}>
        <View style={styles.subContainer}>
          <View style={styles.header}>
            <View style={styles.emptyContainer} />

            <View>
              <Text style={styles.headerText}>{'Advaita112'}</Text>
            </View>
            <View>
              <ActionButton
                buttonStyle={styles.topButtonContainer}
                icon="circleCancel"
                iconType="sample"
                iconStyle={styles.closeIcon}
                // disabled={this.disableRejectResponse}
                onPress={() => onCrossModal()}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.phoneText}>{'Enter your phone number'}</Text>
          </View>
        </View>
      </Modal>
    );
  }),
);

export default AfterLogin;
