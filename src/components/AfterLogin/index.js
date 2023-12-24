import {ScrollView, View} from 'native-base';
import React from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import {inject, observer} from 'mobx-react';
import ActionButton from '@actionButton';
import {productName, checkPreDefinedValue, settings} from '@utils/Constants';
import {get, startCase} from 'lodash';
import CustomIcon from '@customIcon';
import {routing} from '@utils/routeConstant';

const AfterLogin = inject('userStore')(
  observer(props => {
    const {navigation} = props;

    const onSettings = (label = '') => {
      const {onClose} = props;
      onClose();
      if (label === routing.PROFILE) {
        navigation.navigate(routing.PROFILE, {});
      }
    };

    const getShortName = name => {
      if (checkPreDefinedValue(name)) {
        const dividedName = name.split(' ');
        const finalName =
          dividedName.length > 1
            ? `${dividedName[0].charAt(0)}${dividedName[1].charAt(0)}`
            : `${dividedName[0].charAt(0)}`;
        return finalName;
      } else {
        return '';
      }
    };
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
        customBackdrop={
          <TouchableWithoutFeedback onPress={() => onCrossModal()}>
            <View style={styles.customDrop} />
          </TouchableWithoutFeedback>
        }
        onRequestClose={() => onCrossModal()}>
        <View style={styles.subContainer}>
          <View style={styles.header}>
            <View style={styles.emptyContainer} />
            <Text style={styles.headerText}>{productName}</Text>
            <ActionButton
              buttonStyle={styles.topButtonContainer}
              icon="circleCancel"
              iconType="sample"
              iconStyle={styles.closeIcon}
              // disabled={this.disableRejectResponse}
              onPress={() => onCrossModal()}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.userRoot}>
              <View style={styles.userInfoContainer}>
                <View style={styles.avatar}>
                  <Text style={styles.shortName}>
                    {getShortName('Varun Gandhi')}
                  </Text>
                </View>
                <View>
                  <Text style={styles.userName}>
                    {startCase('Varun Gandhi')}
                  </Text>
                  <Text style={styles.userEmail}>
                    {'varungandhi120@gmail.com'}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={[
                styles.orderTransactionContainer,
                Platform.OS === 'ios'
                  ? styles.boxShadowIos
                  : styles.boxShadowAndroid,
              ]}>
              <View style={styles.orderContainer}>
                <View style={styles.orderIconContainer}>
                  <CustomIcon
                    type={'sample'}
                    name={'preorder'}
                    style={styles.orderIcon}
                  />
                </View>
                <Text style={styles.orderText}>{'Orders'}</Text>
              </View>
              <View style={styles.emptyVerticalContainer} />
              <View style={styles.orderContainer}>
                <View style={styles.orderIconContainer}>
                  <CustomIcon
                    type={'sample'}
                    name={'transaction1'}
                    style={styles.orderIcon}
                  />
                </View>
                <Text style={styles.orderText}>{'Transaction'}</Text>
              </View>
            </View>
            <ScrollView>
              {settings.map(item => {
                return (
                  <View key={get(item, 'id')}>
                    {checkPreDefinedValue(get(item, 'label')) ? (
                      <Text style={styles.accountText}>
                        {get(item, 'label')}
                      </Text>
                    ) : null}
                    {get(item, 'item').length > 0
                      ? get(item, 'item').map(itemName => {
                          return (
                            <View
                              style={styles.settingContainer}
                              key={get(item, 'id')}>
                              {get(itemName, 'itemLabel') !== 'SeparateLine' ? (
                                <TouchableOpacity
                                  style={styles.profileContainer}
                                  onPress={() =>
                                    onSettings(get(itemName, 'itemLabel'))
                                  }>
                                  {checkPreDefinedValue(
                                    get(itemName, 'iconName'),
                                  ) ? (
                                    <View style={styles.profileIconContainer}>
                                      <CustomIcon
                                        type={get(itemName, 'iconType')}
                                        name={get(itemName, 'iconName')}
                                        style={styles.orderIcon}
                                      />
                                    </View>
                                  ) : null}

                                  <Text style={styles.profileText}>
                                    {get(itemName, 'itemLabel')}
                                  </Text>
                                </TouchableOpacity>
                              ) : (
                                <View style={styles.separateLine} />
                              )}
                            </View>
                          );
                        })
                      : null}
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }),
);

export default AfterLogin;
