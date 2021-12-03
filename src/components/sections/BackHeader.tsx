import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export function BackHeader({ goBackAction }) {
  return (
    <TouchableOpacity onPress={goBackAction} style={style.navBar}>
      <Icon
        size={35}
        name={'arrow-back-outline'}
        color={'#FFF'}
        type="ionicon"
        tvParallaxProperties={undefined}
      />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  navBar: {
    flex: 1,
    alignSelf: 'flex-start',
  },
});
