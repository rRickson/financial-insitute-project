import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { CreditCardSvg } from '../assets/images/svg/creditCard';
const { width: screenWidth } = Dimensions.get('window');

const ENTRIES1 = [
  {
    user_name: 'Rickson Vasconcelos',
    card_validate: '09/10',
    code: '1234',
    number: '**** **** **** 1234',
  },
];

export function CreditCardCarousel() {
  const renderItem = ({ item }) => {
    return <CreditCardSvg card={item} />;
  };

  return (
    <View style={styles.item}>
      <Carousel
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 30}
        data={ENTRIES1}
        renderItem={renderItem}
        layout={'default'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: screenWidth - 80,
    marginBottom: -30,
  },
});
