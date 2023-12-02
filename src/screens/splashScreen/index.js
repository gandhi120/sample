import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }
  render() {
    return (
      <View>
        <Text> SplashScreen </Text>
      </View>
    );
  }
}
export default SplashScreen;
