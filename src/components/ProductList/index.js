import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {get, upperCase, upperFirst} from 'lodash';
import ActionButton from '@actionButton';
import {routing} from '@utils/routeConstant';

const ProductList = props => {
  const onLike = product => {
    const {navigation} = props;
    navigation.navigate(routing.WISHLIST, {navigation});
  };
  const onProduct = () => {
    const {navigation} = props;
    navigation.navigate(routing.SINGLE_PRODUCT, {navigation});
  };
  const {product, isFrom = ''} = props;
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onProduct}>
      <View
        style={
          isFrom === 'Wishlist'
            ? styles.wishListImageContainer
            : styles.imageContainer
        }>
        <ActionButton
          buttonStyle={styles.likeButton}
          icon={isFrom === 'Wishlist' ? 'delete' : 'like'}
          iconType="sample"
          iconStyle={styles.likeIcon}
          onPress={() => onLike(product)}
        />
        <Image
          source={{
            uri: get(product, 'thumbnail'),
          }}
          style={styles.productImage}
          resizeMode="center"
        />
      </View>
      {isFrom === 'Wishlist' ? (
        <View style={styles.addToBagContainer}>
          <Text>{'Add to Bag'}</Text>
        </View>
      ) : null}

      <Text numberOfLines={1} style={styles.titleText}>
        {upperCase(get(product, 'title'))}
      </Text>
      <Text numberOfLines={1} style={styles.subTitle}>
        {upperFirst(get(product, 'description'))}
      </Text>
      <Text style={styles.price}>{`₹${get(product, 'price')}`}</Text>
    </TouchableOpacity>
  );
};

export default ProductList;
