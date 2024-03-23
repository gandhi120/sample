import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {inject, observer} from 'mobx-react';
import {get, upperCase, upperFirst} from 'lodash';
import ActionButton from '@actionButton';
import {routing} from '@utils/routeConstant';

const ProductList = inject('userStore')(
  observer(props => {
    const onLike = product => {};
    const onProduct = () => {
      const {product} = props;
      const {navigation} = props;
      navigation.navigate(routing.SINGLE_PRODUCT, {navigation});
    };
    const {product} = props;
    return (
      <TouchableOpacity style={styles.mainContainer} onPress={onProduct}>
        <View style={styles.imageContainer}>
          <ActionButton
            buttonStyle={styles.likeButton}
            icon="like"
            iconType="sample"
            iconStyle={styles.likeIcon}
            onPress={() => onLike(product)}
          />
          {/* <View style={styles.rateCountContainer}>
            <Text style={styles.rateText}>{`${get(product, 'rating')}`}</Text>
            <Text style={styles.star}>{'*'}</Text>
            <Text style={styles.rateText}>{get(product, 'stock')}</Text>
          </View> */}

          <Image
            source={{
              uri: get(product, 'thumbnail'),
            }}
            style={styles.productImage}
            resizeMode="center"
          />
        </View>
        <Text numberOfLines={1} style={styles.titleText}>
          {upperCase(get(product, 'title'))}
        </Text>
        <Text numberOfLines={1} style={styles.subTitle}>
          {upperFirst(get(product, 'description'))}
        </Text>
        <Text style={styles.price}>{`₹${get(product, 'price')}`}</Text>
      </TouchableOpacity>
    );
  }),
);

export default ProductList;
