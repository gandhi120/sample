import {View} from 'native-base';
import React from 'react';
import {Image, Text} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import Images from '@theme/images';
import DashedLine from 'react-native-dashed-line';
import {Colors, Metrics} from '@theme';
import CustomIcon from '@customIcon';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const {screenWidth} = Metrics;
interface YesNoModalProps {
  visible: boolean;
  isFromYes: boolean;
  closeModal: () => void;
  onBackdropPress: () => void;
  onRequestClose: () => void;
}
const YesNoModal: React.FC<YesNoModalProps> = props => {
  const {visible, closeModal, isFromYes} = props;
  const X = useSharedValue(10);
  const animationGestureHandler = useAnimatedGestureHandler({
    onActive: e => {
      X.value = e.translationX;
    },
    onEnd: () => {
      if (X.value > screenWidth / 1.7) {
        X.value = withSpring(240);
      } else {
        X.value = withSpring(10);
      }
    },
  });

  const animatesStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: X.value}]};
  });
  const animateTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(X.value, [0, 150], [1, 0], Extrapolate.CLAMP),
      transform: [
        {
          translateX: interpolate(X.value, [0, 150], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const showPrice = () => {
    return (
      <View style={styles.priceContainer}>
        <View style={styles.showPriceContainer}>
          <Text style={styles.priceText}>{'Price'}</Text>
          <Text style={styles.priceText}>{'$ 5.3'}</Text>
        </View>
        <Text style={styles.qtyText}>{'132045 qty available'}</Text>
        <View style={styles.sliderRootContainer}>
          <View style={styles.incrementContainer}>
            <Text style={styles.signText}>{'+'}</Text>
          </View>

          <Text>{'Hello'}</Text>

          <View style={styles.incrementContainer}>
            <Text style={styles.signText}>{'-'}</Text>
          </View>
        </View>
        <View style={styles.dashContainer}>
          <DashedLine
            dashLength={5}
            dashGap={5}
            dashColor={Colors.secondary}
            dashStyle={styles.dash}
          />
        </View>
        <View style={styles.putGetContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.putPriceText}>{'$ 5.3'}</Text>
            <Text style={styles.youText}>{'You put'}</Text>
          </View>
          <View style={styles.leftContainer}>
            <Text style={[styles.putPriceText, styles.putPriceColor]}>
              {'$ 5.3'}
            </Text>
            <Text style={styles.youText}>{'You get'}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Modal
      isVisible={visible}
      style={styles.container}
      avoidKeyboard={true}
      backdropColor={Colors.modalDrop}
      backdropOpacity={0.7}
      onRequestClose={closeModal}
      onBackdropPress={closeModal}>
      <>
        <View style={styles.emptyContainer} />
      </>
      <View style={styles.subContainer}>
        {/* Question container */}
        <View style={styles.questionContainer}>
          <View style={styles.questionSubContainer}>
            <Text style={styles.questionText}>
              {'Kolkata to win the match vs Mumbai?'}
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={Images.tataIpl} style={styles.iplImage} />
          </View>
        </View>
        {/* Yes No button container */}
        <View style={styles.footerContainer}>
          <View
            style={[
              styles.buttonContainer,
              isFromYes ? styles.yesButton : styles.defaultBackGround,
            ]}>
            <Text style={styles.yesText}>{'Yes ₹ 5.3'}</Text>
          </View>
          <View
            style={[
              styles.buttonContainer,
              isFromYes ? styles.defaultBackGround : styles.noButton,
            ]}>
            <Text style={styles.yesText}>{'No ₹ 4.7'}</Text>
          </View>
        </View>
        {/* Progress bar container */}
        {showPrice()}
        <View
          style={[
            styles.swipeContainer,
            isFromYes ? styles.blueSwipe : styles.greenSwipe,
          ]}>
          <Animated.Text
            style={[styles.swipeText, animateTextStyle]}>{`Swipe for ${
            isFromYes ? 'Yes' : 'No'
          }`}</Animated.Text>
          <PanGestureHandler onGestureEvent={animationGestureHandler}>
            <Animated.View style={[styles.roundContainer, animatesStyle]}>
              <CustomIcon
                name={'rightArrow'}
                type={'sample'}
                style={[
                  styles.doubleIcon,
                  isFromYes ? styles.blueDoubleIcon : styles.greenDoubleIcon,
                ]}
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
        <Text style={styles.balanceText}>{'Available Balance : 400.00'}</Text>
      </View>
    </Modal>
  );
};

export default YesNoModal;
