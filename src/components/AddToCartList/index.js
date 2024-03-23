import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import ActionButton from '@actionButton';
import {FlashList} from '@shopify/flash-list';

const AddToCartList = props => {
  const rowRenderer = ({item, index, target, extraData}) => {
    const {navigation} = props;
    return (
      <View style={styles.cart}>
        <View style={styles.productContainer}>
          <Image
            source={{
              uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/s/i/s-urm006091p-urgear-original-imagzgfdmfxctaxh.jpeg?q=70&crop=false',
            }}
            style={styles.productImage}
            resizeMode="center"
          />
          <View style={styles.productInfoContainer}>
            <Text numberOfLines={2} style={styles.productTitle}>
              {'Lee Travis Blue Slim Fit Heavily Washed Jeans'}
            </Text>
            <Text style={styles.productPriceText}>{'₹1919.00'}</Text>
            <Text style={styles.productTitle}>{'Color: Blue'}</Text>
            <View style={styles.sizeQuantityContainer}>
              <View style={styles.selectSizeContainer}>
                <Text style={styles.sizeNumberText}>{'Size:'}</Text>
                <View style={styles.sizeIconContainer}>
                  <Text style={styles.sizeNumberText}>{'32'}</Text>
                  <Text style={styles.downArrowIcon}>{'^'}</Text>
                </View>
              </View>
              <View style={styles.selectSizeContainer}>
                <Text style={styles.sizeNumberText}>{'Qty:'}</Text>
                <View style={styles.sizeIconContainer}>
                  <Text style={styles.sizeNumberText}>{'32'}</Text>
                  <Text style={styles.downArrowIcon}>{'1'}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.emptyContainer} />
        <View style={styles.deliveryContainer}>
          <Text style={styles.deliveryText}>{`Delivery by`}</Text>
          <Text style={styles.deliveryDateText}>{` 28th Mar`}</Text>
        </View>
        <View style={styles.bottomCartContainer}>
          <ActionButton
            buttonStyle={styles.likeIconContainer}
            icon={'like'}
            iconType="sample"
            iconStyle={styles.likeIcon}
          />
          <Text style={styles.wishlistText}>{'Wishlist'}</Text>
          <Text style={styles.removeText}>{'Remove'}</Text>
        </View>
      </View>
    );
  };
  return (
    <FlashList
      estimatedItemSize={200}
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
  );
};

export default AddToCartList;
