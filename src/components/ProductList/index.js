import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {inject, observer} from 'mobx-react';
import {get, upperCase, upperFirst} from 'lodash';
import ActionButton from '@actionButton';

const ProductList = inject('userStore')(
  observer(props => {
    const {product} = props;

    return (
      <View style={styles.rootContainer}>
        <View style={styles.productContainer}>
          <View style={styles.imageContainer}>
            <ActionButton
              buttonStyle={styles.likeButton}
              icon="like"
              iconType="sample"
              iconStyle={styles.likeIcon}
            />
            <View style={styles.rateCountContainer}>
              <Text style={styles.rateText}>{`${get(
                product,
                'rating.rate',
              )}*`}</Text>
              <Text style={styles.rateText}>
                {get(product, 'rating.count')}
              </Text>
            </View>

            <Image
              source={{
                uri: get(product, 'image'),
              }}
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.titleText}>
              {upperCase(get(product, 'category'))}
            </Text>
            <Text numberOfLines={1} style={styles.subTitle}>
              {upperFirst(get(product, 'title'))}
            </Text>
            <Text style={styles.price}>{`₹${get(product, 'price')}`}</Text>
          </View>
        </View>
      </View>
    );
  }),
);

export default ProductList;
