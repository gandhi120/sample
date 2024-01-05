import React, {useEffect, useState} from 'react';
import {RefreshControl, TextInput, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';
import LoginModal from '@loginModal';
import AfterLogin from '@afterLogin';
import {inject, observer} from 'mobx-react';
import {productName, MAX_TEXTAREA_LENGTH} from '@utils/Constants';
import {debounce, get} from 'lodash';
import {FlashList} from '@shopify/flash-list';
import ProductList from '@productList';
import CustomIcon from '@customIcon';
import {Colors} from '@theme';
import ProductLoader from '@productLoader';

const Home = inject('userStore')(
  observer(props => {
    const {userStore} = props;
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [afterLoginVisible, setAfterLoginVisible] = useState(false);
    const [productList, setProductList] = useState([]);
    const [filterProductList, setFilterProductList] = useState([]);
    const [debounceTextChange, setDebounceTextChange] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
      getCloth();
    }, []);

    const getCloth = async () => {
      const clothAllData = await fetch('https://fakestoreapi.com/products');
      const convertJsonCloth = await clothAllData.json();
      setProductList(convertJsonCloth);
      setFilterProductList(convertJsonCloth);
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    };

    const renderRightComponent = () => {
      return (
        <View>
          <ActionButton
            onPress={() =>
              userStore.numberVerified
                ? setAfterLoginVisible(true)
                : setLoginModalVisible(true)
            }
            buttonStyle={styles.loginButtonContainer}
            icon="user"
            iconType="FontAwesome"
            iconStyle={styles.userIcon}
          />
        </View>
      );
    };

    const textAreaChange = text => {
      if (text.length === 0) {
        setProductList(filterProductList);
      }
      if (debounceTextChange) {
        debounceTextChange.cancel();
      }
      const de = debounce(() => {
        // this.setLoader(true);
        getFilterData(text);
      }, 500);
      setDebounceTextChange(de);
    };

    const getFilterData = text => {
      const convertText = text.trim();
      const lastProductList = filterProductList.filter(product =>
        get(product, 'title').toUpperCase().includes(convertText.toUpperCase()),
      );

      if (lastProductList.length > 0) {
        setProductList(lastProductList);
      } else {
        setProductList([]);
      }
    };

    const renderSearchBar = () => {
      return (
        <View style={styles.searchHeaderContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchIconContainer}>
              <CustomIcon
                name={'search'}
                type={'digiQc'}
                style={styles.searchIcon}
              />
            </View>
            <View style={styles.searchTextContainer}>
              <TextInput
                placeholder="Search for products"
                placeholderTextColor={Colors.text}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={textAreaChange}
                style={styles.searchTextInput}
                maxLength={MAX_TEXTAREA_LENGTH}
                aria-disabled={loader}
              />
            </View>
          </View>
        </View>
      );
    };

    const rowRenderer = ({item, index, target, extraData}) => {
      // if (index === 0 || index === 1) {
      // return renderSearchBar();
      // } else if (index === 1) {
      //   const {routes, tabIndex} = this.state;
      //   return (
      //     <View style={styles.indexOneView}>
      //       <TabView
      //         style={styles.tabView}
      //         navigationState={{index: tabIndex, routes}}
      //         renderScene={this.renderScene}
      //         onIndexChange={this.onTabChange}
      //         initialLayout={{width: screenWidth}}
      //         renderTabBar={this.renderTabBar}
      //       />
      //       {this.renderBanner(tabIndex)}
      //     </View>
      //   );
      // } else {
      // if (item === 'LOADER') {
      //   return (
      //     <InspectionLoader eqcListRefreshView={styles.eqcListRefreshView} />
      //   );
      // } else if (item === 'NO_DATA') {
      //   return this.renderNoDataFound();
      // } else {
      return <ProductList product={item} />;
      // }
      // }
    };

    const onRefresh = () => {
      setLoader(true);
      getCloth();
    };

    return (
      <View style={styles.rootContainer}>
        <HeaderComponent
          headerTitle={productName}
          RightComponent={() => renderRightComponent()}
        />
        {renderSearchBar()}
        {loader ? (
          <ProductLoader />
        ) : (
          <View style={styles.indexOneView}>
            <FlashList
              estimatedItemSize={200}
              renderItem={({item, index, target, extraData}) =>
                rowRenderer({item, index, target, extraData})
              }
              data={productList}
              numColumns={2}
              // onEndReached={this.loadMore}
              onEndReachedThreshold={0.1}
              showsVerticalScrollIndicator={true}
              refreshing={false}
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={() => onRefresh()}
                />
              }
              // stickyHeaderIndices={[1]}
              // scrollEnabled={get(this.toBeApprovedList, '[0]') !== 'LOADER'}
              // extendedState={{
              //   searchText: this.searchText,
              // }}
            />
          </View>
        )}

        {/* </View> */}
        <LoginModal
          visible={loginModalVisible}
          onClose={() => setLoginModalVisible(false)}
        />
        <AfterLogin
          visible={afterLoginVisible}
          onClose={() => setAfterLoginVisible(false)}
          navigation={get(props, 'navigation')}
        />
      </View>
    );
  }),
);

export default Home;
