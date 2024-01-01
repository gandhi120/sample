import React, {useEffect, useState} from 'react';

import {View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';
import LoginModal from '@loginModal';
import AfterLogin from '@afterLogin';
import {inject, observer} from 'mobx-react';
import {productName} from '@utils/Constants';
import {get} from 'lodash';
import {FlashList} from '@shopify/flash-list';
import ProductList from '@productList';

const Home = inject('userStore')(
  observer(props => {
    const {userStore} = props;
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [afterLoginVisible, setAfterLoginVisible] = useState(false);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
      getCloth();
    }, []);

    const getCloth = async () => {
      const clothAllData = await fetch('https://fakestoreapi.com/products');
      const convertJsonCloth = await clothAllData.json();
      setProductList(convertJsonCloth);
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

    const rowRenderer = ({item, index, target, extraData}) => {
      // if (index === 0) {
      //   return this.renderSearchBar();
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

    return (
      <View style={styles.rootContainer}>
        <HeaderComponent
          headerTitle={productName}
          RightComponent={() => renderRightComponent()}
        />
        {/* <Text>{'HOME screen!'}</Text> */}
        {/* <View style={styles.rootContainer}> */}
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

            // refreshControl={
            //   <RefreshControl
            //     refreshing={false}
            //     onRefresh={() => this.onRefresh()}
            //   />
            // }
            // stickyHeaderIndices={[1]}
            // scrollEnabled={get(this.toBeApprovedList, '[0]') !== 'LOADER'}
            // extendedState={{
            //   searchText: this.searchText,
            // }}
          />
        </View>
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
