import {View} from 'native-base';
import React from 'react';
import {Image, Text} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import Images from '@theme/images';
const YesNoModal: React.FC = () => {
  /* UI Design Code */

  return (
    <>
      <Modal
        isVisible={false}
        style={styles.container}
        // onModalHide={() => this.setCameraSheet(false)}
        // onModalShow={this.onModalShow}
        avoidKeyboard={true}
        // onRequestClose={() => onCrossModal()}
      >
        <>
          <View style={styles.emptyContainer} />
        </>
        <View style={styles.subContainer}>
          {/* Question container */}
          <View style={styles.questionContainer}>
            <View style={styles.questionSubContainer}>
              <Text style={styles.questionText}>
                {'Kolkata to win the match vs Mumbai?'}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={Images.tataIpl} style={styles.iplImage} />
            </View>
          </View>
          {/* Yes No button container */}
          <View style={styles.footerContainer}>
            <View
              style={[
                styles.buttonContainer,
                true ? styles.defaultBackGround : styles.yesButton,
              ]}>
              <Text style={styles.yesText}>{'Yes ₹ 5.3'}</Text>
            </View>
            <View
              style={[
                styles.buttonContainer,
                true ? styles.defaultBackGround : styles.noButton,
              ]}>
              <Text style={styles.yesText}>{'No ₹ 4.7'}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default YesNoModal;
