import {ScrollView, View} from 'native-base';
import React from 'react';
import {Platform, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import {inject, observer} from 'mobx-react';
import ActionButton from '@actionButton';
import {productName, checkPreDefinedValue} from '@utils/Constants';
import {get, startCase} from 'lodash';
import CustomIcon from '@customIcon';

const settings = [
  {
    label: 'ACCOUNT',
    item: [
      {itemLabel: 'Profile', iconName: 'user', iconType: 'FontAwesome'},
      {itemLabel: 'Address', iconName: 'address', iconType: 'FontAwesome'},
      {
        itemLabel: 'SeparateLine',
        iconName: '',
        iconType: '',
      },
    ],
  },
  {
    label: 'HELP & MORE',
    item: [
      {itemLabel: 'Help', iconName: '', iconType: ''},
      {itemLabel: 'Rate our app', iconName: '', iconType: ''},
      {
        itemLabel: 'SeparateLine',
        iconName: '',
        iconType: '',
      },
    ],
  },
  {
    label: '',
    item: [
      {itemLabel: 'Sign Out', iconName: '', iconType: ''},
      {itemLabel: 'App Version 1.0.0', iconName: '', iconType: ''},
    ],
  },
];

const AfterLogin = inject('userStore')(
  observer(props => {
    // const {userStore} = props;
    /* UI Design Code */
    // const [userName, setCount] = useState(0);

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
    const userName = 'Varun Gandhi';
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
                    name={'order'}
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
                    name={'transaction'}
                    style={styles.orderIcon}
                  />
                </View>
                <Text style={styles.orderText}>{'Transaction'}</Text>
              </View>
            </View>
            <ScrollView>
              {settings.map(item => {
                return (
                  <View style={{}}>
                    {checkPreDefinedValue(get(item, 'label')) ? (
                      <Text style={styles.accountText}>
                        {get(item, 'label')}
                      </Text>
                    ) : null}
                    {get(item, 'item').length > 0
                      ? get(item, 'item').map(itemName => {
                          return (
                            <View style={styles.settingContainer}>
                              {get(itemName, 'itemLabel') !== 'SeparateLine' ? (
                                <View style={styles.profileContainer}>
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
                                </View>
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
