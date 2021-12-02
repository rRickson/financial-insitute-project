import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

export function SectionButtons({ button, action }) {
  return (
    <View style={style.iconContainer}>
      <TouchableOpacity style={style.iconAlign} onPress={action}>
        <Icon
          name={button.icon}
          color="#fff"
          type="feather"
          tvParallaxProperties={undefined}
        />
        <Text style={style.text}>{button.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'rgba(55,71,79,0.5)',
    borderRadius: 15,
    width: 65,
    height: 65,
    marginBottom: 20,
    marginRight: 20,
  },

  iconAlign: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
});
