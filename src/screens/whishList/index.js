import React, {useEffect} from 'react';
import {View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';
import {FlashList} from '@shopify/flash-list';
import ProductList from '@productList';
import {routing} from '@utils/routeConstant';

const WhishList = props => {
  useEffect(() => {}, []);

  const rowRenderer = ({item, index, target, extraData}) => {
    const {navigation} = props;
    return (
      <ProductList navigation={navigation} product={item} isFrom={'Wishlist'} />
    );
  };

  const renderRightComponent = () => {
    const {navigation} = props;

    return (
      <ActionButton
        buttonStyle={styles.likeIconContainer}
        icon={'cart'}
        iconType="sample"
        iconStyle={styles.likeIcon}
        onPress={() => navigation.navigate(routing.ADD_TO_CART, {navigation})}
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
        headerTitle={'Whishlist'}
        backEnable={true}
        onBackPress={() => onBack()}
        RightComponent={() => renderRightComponent()}
      />

      <View style={styles.indexOneView}>
        <FlashList
          estimatedItemSize={200}
          renderItem={({item, index, target, extraData}) =>
            rowRenderer({item, index, target, extraData})
          }
          data={[
            {
              id: 1,
              title: 'iPhone 9',
              description: 'An apple mobile which is nothing like apple',
              price: 549,
              discountPercentage: 12.96,
              rating: 4.69,
              stock: 94,
              brand: 'Apple',
              category: 'smartphones',
              thumbnail:
                'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
            },
            {
              id: 1,
              title: 'iPhone 9',
              description: 'An apple mobile which is nothing like apple',
              price: 549,
              discountPercentage: 12.96,
              rating: 4.69,
              stock: 94,
              brand: 'Apple',
              category: 'smartphones',
              thumbnail:
                'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
            },
            {
              id: 1,
              title: 'iPhone 9',
              description: 'An apple mobile which is nothing like apple',
              price: 549,
              discountPercentage: 12.96,
              rating: 4.69,
              stock: 94,
              brand: 'Apple',
              category: 'smartphones',
              thumbnail:
                'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
            },
            {
              id: 1,
              title: 'iPhone 9',
              description: 'An apple mobile which is nothing like apple',
              price: 549,
              discountPercentage: 12.96,
              rating: 4.69,
              stock: 94,
              brand: 'Apple',
              category: 'smartphones',
              thumbnail:
                'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
            },
          ]}
          numColumns={2}
          // onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={true}
          refreshing={false}
        />
      </View>
    </View>
  );
};

export default WhishList;
