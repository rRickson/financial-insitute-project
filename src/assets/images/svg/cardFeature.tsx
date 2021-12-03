import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function CardFeature({ feature }) {
  return (
    <LinearGradient
      start={{ x: 1.1, y: 0.25 }}
      end={{ x: 0.5, y: 2.0 }}
      locations={[0, 0.6, 1.0]}
      colors={['#58768e', '#5b90a0', '#355876']}
      style={styles.linearGradient}
    >
      <Text style={styles.headline}>{feature.headline}</Text>

      <View style={styles.priceSection}>
        <Text style={styles.caption}>{feature.caption}</Text>
        <Text style={styles.price}>{feature.price}</Text>
      </View>
    </LinearGradient>
  );
}

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    width: '100%',
    height: 150,
  },
  headline: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
    top: 15,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  priceSection: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  price: {
    fontSize: 35,
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
