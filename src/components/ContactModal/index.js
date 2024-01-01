import React, {Component} from 'react';
import {Linking, Text, View} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import ActionButton from '@actionButton';
import {debounce} from 'lodash';

class ContactModal extends Component {
  render() {
    const {
      visible,
      onClose = () => {},
      contactDetails,
      disable = false,
      title,
    } = this.props;
    const onOkDebounce = debounce(() => onClose(), 100);
    return (
      <Modal isVisible={visible} style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text
            onPress={() => Linking.openURL(`tel:${contactDetails}`)}
            style={styles.alertDescription}>
            {contactDetails}
          </Text>
          <View style={styles.okButtonContainer}>
            <ActionButton
              text="Ok"
              textStyle={styles.okText}
              buttonStyle={styles.okContainer}
              onPress={onOkDebounce}
              disabled={disable}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ContactModal;
