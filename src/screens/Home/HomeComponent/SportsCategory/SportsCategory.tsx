import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './styles';
import {TITLE_BAR_ITEM} from '@utils/Constants';

type item = {
  title: string;
  subTitle: string;
  currentUpDown: string;
  imageUri: object;
};

const SportsCategory: React.FC = () => {
  const renderItem = ({item}: {item: item}) => (
    <View style={styles.horizontalItem}>
      <View>
        <Text style={styles.titleText}>{item.title}</Text>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Text style={styles.realTimeText}>{item.currentUpDown}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={item.imageUri} />
      </View>
    </View>
  );

  return (
    <FlatList
      horizontal
      data={TITLE_BAR_ITEM}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SportsCategory;
