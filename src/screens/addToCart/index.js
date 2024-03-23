import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';
import {replaceIndianFormate} from '@utils/Constants';
import AddToCartList from '@addToCartList';
import {routing} from '@utils/routeConstant';
import {FlashList} from '@shopify/flash-list';

const AddToCart = props => {
  const {navigation} = props;
  useEffect(() => {}, []);

  const renderRightComponent = () => {
    return (
      <ActionButton
        buttonStyle={styles.likeIconContainer}
        icon={'like'}
        iconType="sample"
        iconStyle={styles.likeIcon}
        onPress={() => navigation.navigate(routing.WISHLIST, {navigation})}
      />
    );
  };
  const onBack = () => {
    const {goBack} = props.navigation;
    goBack(null);
  };
  const rowRenderer = ({item, index, target, extraData}) => {
    const {navigation} = props;
    return <AddToCartList navigation={navigation} />;
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
        {/* <AddToCartList navigation={navigation} /> */}
        <FlashList
          estimatedItemSize={241}
          renderItem={({item, index, target, extraData}) =>
            rowRenderer({item, index, target, extraData})
          }
          data={[1, 2, 1]}
          numColumns={1}
          // onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={true}
          refreshing={false}
          // stickyHeaderIndices={[1]}
          // scrollEnabled={get(this.toBeApprovedList, '[0]') !== 'LOADER'}
          // extendedState={{
          //   searchText: this.searchText,
          // }}
        />
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
