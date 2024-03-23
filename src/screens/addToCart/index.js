import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';
import {replaceIndianFormate} from '@utils/Constants';
import AddToCartList from '@addToCartList';

const AddToCart = props => {
  useEffect(() => {}, []);

  const renderRightComponent = () => {
    return (
      <ActionButton
        buttonStyle={styles.likeIconContainer}
        icon={'like'}
        iconType="sample"
        iconStyle={styles.likeIcon}
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
        headerTitle={'Your Bag'}
        headerTitleStyle={styles.headerTitleText}
      />
      <ScrollView style={styles.outerRoot}>
        <AddToCartList />
        <View style={styles.priceDetailContainer}>
          <Text style={styles.priceDetailText}>{'Price Details'}</Text>
          <View style={styles.priceRowContainer}>
            <Text style={styles.titleText}>{'Bag Total'}</Text>
            <Text style={styles.ansText}>{`₹${replaceIndianFormate(
              13999,
            )}`}</Text>
          </View>
          <View style={styles.priceRowContainer}>
            <Text style={styles.titleText}>{'Product Discount(s)'}</Text>
            <Text style={styles.discountText}>{`-₹${replaceIndianFormate(
              13999,
            )}`}</Text>
          </View>
          <View style={styles.priceRowContainer}>
            <Text style={styles.titleText}>{'Total Payable'}</Text>
            <Text style={styles.ansText}>{`₹${replaceIndianFormate(
              13999,
            )}`}</Text>
          </View>
          <View style={styles.priceRowContainer}>
            <Text
              style={
                styles.discountText
              }>{`You will save ₹${replaceIndianFormate(
              13999,
            )} on this order`}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Text style={styles.priceText}>{`₹${replaceIndianFormate(
          13999,
        )}`}</Text>
        <ActionButton
          buttonStyle={styles.addToCartButton}
          text={'Checkout'}
          textStyle={styles.addToCartText}
        />
      </View>
    </View>
  );
};

export default AddToCart;
