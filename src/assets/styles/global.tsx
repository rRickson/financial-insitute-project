import { StyleSheet } from 'react-native';
import { ColorsPallete } from './ColorsPallete';

export const Colors = {
  primary: '#82cde5',
  secondary: '#113b5e',
  payment: '#21de5a',
  danger: '#b8330b',
  warning: '#b8790b',
  info: '#0bacb8',
  text: '#2b2b2b',
  gray: '#7d7272',
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
  SectionHeader: {
    textAlign: 'center',
    fontSize: 30,
    color: ColorsPallete.skyOcean[500],
  },
  WhiteText: {
    color: '#fff',
  },
});

export const Margin = {
  marginDefaul: 10,
};

export const GenerateColor = () => {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  let colorRegEx = new RegExp('^#([a-fA-F0-9]){3}$|[a-fA-F0-9]{6}$');
  if (colorRegEx.test(color)) {
    return `#${color}`;
  }
  GenerateColor();
};

export const DoughnutColor = [
  '#a1c389',
  '#765faf',
  ColorsPallete.green[700],
  ColorsPallete.red[700],
  ColorsPallete.orange[700],
  '#351c75',
  '#a28250',
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
];

export const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsPallete.darkBlue[500],
    padding: 10,
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: '600',
    color: '#fff',
  },
  pageSection: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  informationTitle: {
    color: ColorsPallete.darkBlue[200],
  },
});
