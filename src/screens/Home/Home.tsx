import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../AppNavigator';
import styles from './styles';
import {FlashList} from '@shopify/flash-list';
import SportsCategory from './HomeComponent/SportsCategory/SportsCategory'; // Adjust the path as needed
import Images from '@theme/images';
import YesNoModal from '@yesNoModal';
import {useState} from 'react';

const data = [
  {id: '1', type: 'horizontal'},
  {id: '2', type: 'no-scroll'},
  {id: '3', type: 'vertical'},
  {id: '4', type: 'vertical'},
  {id: '5', type: 'vertical'},
  {id: '6', type: 'vertical'},
];
interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home = ({navigation}: HomeScreenProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFromYes, setIsFromYes] = useState<boolean>(false);

  const onOption = (isFrom = false) => {
    setIsFromYes(isFrom);
    setIsVisible(true);
  };
  const renderItem = ({item, index}: {item: any; index: number}) => {
    if (index === 0) {
      // Render sports category..
      return <SportsCategory />;
    } else if (index === 1) {
      // Render banner..
      return (
        <View style={styles.noScrollItem}>
          <View>
            <Image source={Images.background} style={styles.background} />
            <Text style={styles.bannerText}>
              {
                'One of our team mate finds difficulty while booking train ticket on \n IRCTC app. He encountered numerous problems such as logged in \n the app, automatically logout, interface looks cluttered, and require \n a captcha each time he logged in. Additionally, there were unclear \n instructions for booking train tickets, and he was having trouble with \n the class and quota sections.'
              }
            </Text>
          </View>
          <Image source={Images.banner} style={styles.bannerStyle} />
        </View>
      );
    } else {
      // Render questions..
      return (
        <View style={styles.root}>
          {/* This for question and image part */}
          <View style={styles.questionContainer}>
            <View style={styles.questionSubContainer}>
              <Text style={styles.questionText}>
                {'Kolkata to win the match vs Mumbai?'}
              </Text>
              <Text style={styles.questionSubText}>
                {'H2H last 5 T20 : Kolkata 4,Mumbai 1, DRAW 0'}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={Images.tataIpl} style={styles.iplImage} />
            </View>
          </View>
          {/* This for footer button part */}
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.yesButton]}
              onPress={() => onOption(true)}>
              <Text style={styles.yesText}>{'Yes ₹ 5.3'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.noButton]}
              onPress={() => onOption(false)}>
              <Text style={styles.yesText}>{'No ₹ 4.7'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <FlashList
        bounces={false}
        data={data}
        renderItem={renderItem}
        estimatedItemSize={50} // Estimate the item height for performance optimization
        keyExtractor={item => item.id}
      />

      <YesNoModal
        visible={isVisible}
        isFromYes={isFromYes}
        closeModal={() => setIsVisible(false)}
      />
    </View>
  );
};

export default Home;
