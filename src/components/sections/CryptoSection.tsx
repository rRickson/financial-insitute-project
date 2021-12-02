import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DoughnutSVG } from '../../assets/images/svg/doughnut';
import { ColorsPallete } from '../../assets/styles/ColorsPallete';
import { cryptoList } from '../../data/crypto';
import { SectionButtons } from '../buttons/sectionButtons';
import { CryptoInfo } from '../listsItems/CryptoInfo';

const buttonList = [
  { name: 'Receive', icon: 'arrow-down-left' },
  { name: 'Send', icon: 'arrow-up-right' },
  { name: 'Market', icon: 'shopping-cart' },
  { name: 'Change', icon: 'dollar-sign' },
];

export function CryotoSection() {
  const renderButtons = () => {
    return buttonList.map(item => {
      return <SectionButtons action={null} button={item} key={item.name} />;
    });
  };

  const renderList = () => {
    return cryptoList.map(item => {
      return <CryptoInfo item={item} key={item.id} />;
    });
  };

  return (
    <View style={style.mainContainer}>
      <View>
        <DoughnutSVG assetsList={cryptoList} />
      </View>
      <View style={style.optionsList}>{renderButtons()}</View>
      <View style={style.cryptoList}>{renderList()}</View>
    </View>
  );
}

const style = StyleSheet.create({
  list: {
    backgroundColor: ColorsPallete.blueGrey[50],
    flex: 1,
    width: '100%',
    borderRadius: 40,
  },
  listItem: {
    borderRadius: 40,
    backgroundColor: ColorsPallete.blueGrey[50],
  },
  mainContainer: {},
  cryptoList: {},
  optionsList: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
});
