import {View} from 'native-base';
import React, {useState, useRef, useEffect} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import {Colors} from '@theme';
import TextField from '@components/TextField';
import {FieldState, FormState} from 'formstate';
import validators from '@utils/FormValidators';
import Form from '@utils/Form';
import {isEmpty} from 'lodash';
import {inject, observer} from 'mobx-react';
// import {action, makeObservable, observable} from 'mobx';
import ActionButton from '@actionButton';
import {validOnlyNumber, otpLength, productName} from '@utils/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '@redux/feature/AuthSlice';

const SizeModal = props => {
  const dispatch = useDispatch();
  const {userData, isLoading, isSuccess, isError} = useSelector(
    State => State.auth,
  );

  const {visible} = props;
  return (
    <Modal
      isVisible={false}
      style={styles.container}
      // onModalHide={() => this.setCameraSheet(false)}
      // onModalShow={this.onModalShow}
      avoidKeyboard={true}
      // onRequestClose={() => onCrossModal()}
    >
      <View style={styles.subContainer}>
        <ActionButton
          buttonStyle={styles.topButtonContainer}
          icon="cross"
          iconType="sample"
          iconStyle={styles.closeIcon}
          // disabled={this.disableRejectResponse}
          // onPress={() => onCrossModal()}
        />
      </View>
    </Modal>
  );
};

export default SizeModal;
