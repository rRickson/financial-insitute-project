import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';

// export class Loader extends PureComponent {
export function Loader({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  });
  return (
    <LottieView
      source={require('../assets/images/animations/loader.json')}
      autoPlay
      loop
    />
  );
}
