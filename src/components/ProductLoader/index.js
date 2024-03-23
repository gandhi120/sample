import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Skeleton} from 'native-base';
const ProductLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.singleWholeCartContainer}>
        <View style={styles.subContainer}>
          <Skeleton style={styles.recyclerBackground} />
          <Skeleton style={styles.title} />
          <Skeleton style={styles.description} />
          <Skeleton style={styles.price} />
        </View>
        <View style={styles.subContainer}>
          <Skeleton style={styles.recyclerBackground} />
          <Skeleton style={styles.title} />
          <Skeleton style={styles.description} />
          <Skeleton style={styles.price} />
        </View>
      </View>
      <View style={styles.singleWholeCartContainer}>
        <View style={styles.subContainer}>
          <Skeleton style={styles.recyclerBackground} />
          <Skeleton style={styles.title} />
          <Skeleton style={styles.description} />
          <Skeleton style={styles.price} />
        </View>
        <View style={styles.subContainer}>
          <Skeleton style={styles.recyclerBackground} />
          <Skeleton style={styles.title} />
          <Skeleton style={styles.description} />
          <Skeleton style={styles.price} />
        </View>
      </View>
      <View style={styles.singleWholeCartContainer}>
        <View style={styles.subContainer}>
          <Skeleton style={styles.recyclerBackground} />
          <Skeleton style={styles.title} />
          <Skeleton style={styles.description} />
          <Skeleton style={styles.price} />
        </View>
        <View style={styles.proContainer}>
          <Skeleton style={styles.recyclerBackground} />
          <Skeleton style={styles.title} />
          <Skeleton style={styles.description} />
          <Skeleton style={styles.price} />
        </View>
      </View>
    </View>
  );
};

export default ProductLoader;
