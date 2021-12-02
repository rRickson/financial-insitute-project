import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { ColorsPallete } from '../../assets/styles/ColorsPallete';

export function GroupButtons({ select, buttons, action }) {
  return (
    <ButtonGroup
      onPress={action}
      selectedIndex={select}
      buttons={buttons}
      containerStyle={style.container}
      buttonStyle={style.button}
      selectedButtonStyle={style.selectedButton}
      innerBorderStyle={style.innerButton}
      textStyle={style.text}
      selectedTextStyle={style.selectedText}
    />
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 3,
    backgroundColor: ColorsPallete.blueGrey.a700,
    borderWidth: 0,
    marginTop: 10,
  },
  button: {
    borderRadius: 15,
  },
  selectedButton: {
    backgroundColor: ColorsPallete.blueGrey.a100,
  },
  innerButton: {
    width: 0,
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
  selectedText: {
    color: ColorsPallete.blueGrey.a700,
  },
});
