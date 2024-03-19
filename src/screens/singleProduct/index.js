import React, {useEffect} from 'react';
import {View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';

const SingleProduct = props => {
  useEffect(() => {}, []);

  const renderRightComponent = () => {
    return (
      <ActionButton
        buttonStyle={styles.cartIconContainer}
        icon={'cart'}
        iconType="sample"
        iconStyle={styles.cartIcon}
      />
    );
  };
  const onBack = () => {
    const {goBack} = props.navigation;
    goBack(null);
  };

  return (
    <View style={styles.rootContainer}>
      <HeaderComponent
        backEnable={true}
        onBackPress={onBack}
        RightComponent={() => renderRightComponent()}
      />
    </View>
  );
};

export default SingleProduct;
