import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';
import {FlashList} from '@shopify/flash-list';
import {replaceIndianFormate} from '@utils/Constants';
import {map} from 'lodash';
import {Colors, Metrics} from '@theme';
const {screenWidth} = Metrics;
const clothData = [
  {
    id: 1,
    url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/s/i/s-urm006091p-urgear-original-imagzgfdmfxctaxh.jpeg?q=70&crop=false',
  },
  {
    id: 2,
    url: 'https://rukminim2.flixcart.com/image/832/832/knhsgi80/t-shirt/k/r/p/m-urm006091p-urgear-original-imag25ks4wydvcbc.jpeg?q=70&crop=false',
  },
  {
    id: 3,
    url: 'https://rukminim2.flixcart.com/image/832/832/knhsgi80/t-shirt/u/x/f/m-urm006091p-urgear-original-imag25ks6vwcggcs.jpeg?q=70&crop=false',
  },
  {
    id: 4,
    url: 'https://rukminim2.flixcart.com/image/832/832/knhsgi80/t-shirt/u/m/r/m-urm006091p-urgear-original-imag25ksvq4hqyhc.jpeg?q=70&crop=false',
  },
];

const renderSlider = ({item}) => {
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: item.url,
      }}
    />
  );
};

const SingleProduct = props => {
  useEffect(() => {}, []);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rowRenderer = ({item, index, target, extraData}) => {
    const {navigation} = props;
    if (index === 0) {
      return (
        <View style={styles.sliderContainer}>
          <FlatList
            data={clothData}
            renderItem={renderSlider}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScroll={e => {
              const index = Math.floor(
                e.nativeEvent.contentOffset.x / screenWidth,
              );
              setSelectedIndex(index >= 0 ? index : 0);
            }}
          />
          <View style={styles.scrollBarContainer}>
            {map(clothData, (_item, index) => {
              return (
                <View
                  style={[
                    styles.emptyView,
                    {
                      backgroundColor:
                        selectedIndex === index ? Colors.black : Colors.gray,
                    },
                  ]}
                />
              );
            })}
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const renderRightComponent = () => {
    return (
      <ActionButton
        buttonStyle={styles.cartIconContainer}
        icon={'cart'}
        iconType="sample"
        iconStyle={styles.cartIcon}
      />
    );
  };
  const onBack = () => {
    const {goBack} = props.navigation;
    goBack(null);
  };

  return (
    <View style={styles.rootContainer}>
      <HeaderComponent
        backEnable={true}
        onBackPress={onBack}
        RightComponent={() => renderRightComponent()}
      />
      <FlashList
        estimatedItemSize={200}
        renderItem={({item, index, target, extraData}) =>
          rowRenderer({item, index, target, extraData})
        }
        data={[1, 2, 3, 4, 4]}
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

      <View style={styles.bottomContainer}>
        <Text style={styles.priceText}>{`₹${replaceIndianFormate(
          13999,
        )}`}</Text>
        <ActionButton
          buttonStyle={styles.addToCartButton}
          text={'ADD TO CART'}
          textStyle={styles.addToCartText}
        />
      </View>
    </View>
  );
};

export default SingleProduct;
