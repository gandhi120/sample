import React, {useEffect, useState} from 'react';
import {RefreshControl, TextInput, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';
import styles from './styles';
import ActionButton from '@actionButton';
import LoginModal from '@loginModal';
import AfterLogin from '@afterLogin';
import {productName, MAX_TEXTAREA_LENGTH} from '@utils/Constants';
import {debounce, get, isEmpty} from 'lodash';
import {FlashList} from '@shopify/flash-list';
import ProductList from '@productList';
import CustomIcon from '@customIcon';
import {Colors} from '@theme';
import ProductLoader from '@productLoader';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts, onPageRefresh} from '@redux/feature/ProductSlice';

const Home = props => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [afterLoginVisible, setAfterLoginVisible] = useState(false);
  const [filterProductList, setFilterProductList] = useState([]);
  const [debounceTextChange, setDebounceTextChange] = useState(null);
  const [loader, setLoader] = useState(true);
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  const {userData} = useSelector(State => State.auth);
  const {productData, isLoading, limit, skip, refresh} = useSelector(
    State => State.product,
  );
  useEffect(() => {
    dispatch(getAllProducts({limit, skip}));
  }, []);

  const renderRightComponent = () => {
    return (
      <ActionButton
        onPress={() =>
          isEmpty(userData)
            ? setLoginModalVisible(true)
            : setAfterLoginVisible(true)
        }
        buttonStyle={styles.loginButtonContainer}
        icon={isEmpty(userData) ? 'user' : 'activeUser'}
        iconType="sample"
        iconStyle={styles.userIcon}
      />
    );
  };

  const textAreaChange = text => {
    setSearchText(text);
    if (text.length === 0) {
      setFilterProductList([]);
    }
    if (debounceTextChange) {
      debounceTextChange.cancel();
    }
    const de = debounce(() => {
      getFilterData(text);
    }, 500);
    setDebounceTextChange(de);
  };

  const getFilterData = text => {
    const convertText = text.trim().toString();
    const lastProductList = productData.filter(product =>
      get(product, 'title')
        .replace(/ +/g, '')
        .toString()
        .toUpperCase()
        .includes(convertText.toUpperCase()),
    );

    if (lastProductList.length > 0) {
      setFilterProductList(lastProductList);
    } else {
      setFilterProductList([]);
    }
  };

  const renderSearchBar = () => {
    return (
      <View style={styles.searchHeaderContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchIconContainer}>
            <CustomIcon
              name={'search'}
              type={'sample'}
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
              value={searchText}
            />
          </View>
        </View>
      </View>
    );
  };

  const rowRenderer = ({item, index, target, extraData}) => {
    const {navigation} = props;
    return <ProductList navigation={navigation} product={item} />;
  };

  const loadMore = () => {
    dispatch(getAllProducts({limit, skip}));
  };

  const onRefresh = () => {
    const skipItem = 0;
    if (!refresh) {
      setLoader(true);
      dispatch(onPageRefresh());
      setTimeout(() => {
        dispatch(getAllProducts({limit, skipItem}));
      }, 1000);
    }
  };
  return (
    <View style={styles.rootContainer}>
      <HeaderComponent
        headerTitle={productName}
        RightComponent={() => renderRightComponent()}
      />
      {renderSearchBar()}
      {isLoading ? (
        <ProductLoader />
      ) : (
        <View style={styles.indexOneView}>
          <FlashList
            estimatedItemSize={200}
            renderItem={({item, index, target, extraData}) =>
              rowRenderer({item, index, target, extraData})
            }
            data={searchText.length === 0 ? productData : filterProductList}
            numColumns={2}
            onEndReached={() => loadMore()}
            onEndReachedThreshold={0.1}
            showsVerticalScrollIndicator={false}
            refreshing={false}
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                onRefresh={() => onRefresh()}
              />
            }
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
};

export default Home;
