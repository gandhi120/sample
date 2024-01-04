import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Skeleton} from 'native-base';
const ProductLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.recyclerBackground}>
        <Skeleton style={styles.eqcListView} />
        <Skeleton style={styles.eqcListView} />
      </View>
      <View style={styles.recyclerBackground}>
        <Skeleton style={styles.eqcListView} />
        <Skeleton style={styles.eqcListView} />
      </View>
      <View style={styles.recyclerBackground}>
        <Skeleton style={styles.eqcListView} />
        <Skeleton style={styles.eqcListView} />
      </View>
    </View>
  );
};

export default ProductLoader;
