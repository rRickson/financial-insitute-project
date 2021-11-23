import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#82cde5',
  secondary: '#113b5e',
  payment: '#21de5a',
  danger: '#b8330b',
  warning: '#b8790b',
  info: '#0bacb8',
  text: '#2b2b2b',
};

export const Fonts = StyleSheet.create({
  Title: {
    fontSize: 30,
    color: Colors.primary,
  },
  Subtitle: {
    fontSize: 15,
    color: Colors.primary,
  },
  MainText: {
    fontSize: 20,
    color: Colors.text,
  },
  Value: {
    fontSize: 30,
    color: Colors.secondary,
  },
});
