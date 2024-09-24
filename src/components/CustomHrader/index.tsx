import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import styles from './styles';
import CustomIcon from '@customIcon';

const CustomHeader: React.FC<NativeStackHeaderProps> = props => {
  const {title} = props;

  return (
    <View style={styles.headerRoot}>
      <View style={styles.container}>
        {/* Left container */}
        <View style={styles.leftContainer}>
          <Text style={styles.categoryText}>{title}</Text>
          <CustomIcon
            name={'downArrow'}
            type={'sample'}
            style={styles.closeIcon}
          />
        </View>
        {/* Right container */}
        <View style={styles.leftContainer}>
          <View style={styles.switchContainer}>
            <View style={styles.emptyView} />
          </View>
          <View>
            <Text style={styles.categoryText}>{'LIVE'}</Text>
          </View>
          <View style={styles.notificationContainer}>
            <CustomIcon
              name={'like'}
              type={'sample'}
              style={styles.notificationIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;
