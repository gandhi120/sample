import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {inject, observer} from 'mobx-react';
import {get, upperCase, upperFirst} from 'lodash';
import ActionButton from '@actionButton';

const ProductList = inject('userStore')(
  observer(props => {
    const onLike = product => {};
    const {product} = props;
    console.log('product', product);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <ActionButton
            buttonStyle={styles.likeButton}
            icon="like"
            iconType="sample"
            iconStyle={styles.likeIcon}
            onPress={() => onLike(product)}
          />
          <View style={styles.rateCountContainer}>
            <Text style={styles.rateText}>{`${get(product, 'rating')}`}</Text>
            <Text style={styles.star}>{'*'}</Text>
            <Text style={styles.rateText}>{get(product, 'stock')}</Text>
          </View>

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
      </View>
    );
  }),
);

export default ProductList;
