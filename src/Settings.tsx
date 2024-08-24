import {FlatList, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'AppNavigator';
import {useEffect, useState} from 'react';

interface SettingsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
}

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: any;
}
const Settings = ({navigation}: SettingsScreenProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);
  console.log('products', products);

  return (
    <View>
      <Text onPress={() => navigation.goBack()}>{'Settings'}</Text>
      <FlatList
        data={products}
        renderItem={({item, index}: {item: Product; index: number}) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Settings;
