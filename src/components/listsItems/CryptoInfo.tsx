import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { cryptoIcons } from '../../assets/images/cryptoIcons/cryptIcons';
import { ColorsPallete } from '../../assets/styles/ColorsPallete';
import { Margin } from '../../assets/styles/global';

export function CryptoInfo({ item }) {
  const calculatePercent = (price, total) => {
    item.balance = (100 * (price / total)).toFixed(2);
    return item.balance;
  };
  return (
    <>
      <View style={style.mainContainer}>
        <View style={style.iconContainer}>
          <View style={style.icon}>{cryptoIcons[item.id]}</View>
          <View style={style.information}>
            <Text style={style.infomrationText}>{item.name}</Text>
            <Text style={style.infomrationText}>{item.symbol}</Text>
          </View>
        </View>
        <View style={style.chartContainer}>
          <Text style={style.infomrationText}>Assets</Text>
          <Text style={style.infomrationText}>{item.user_asset}</Text>
        </View>
        <View style={style.priceContainer}>
          <Text style={style.priceSection}>
            {`USD = ${Number(item.price).toFixed(2)}`}
          </Text>
          <View style={style.percentContainer}>
            <Icon
              name={
                item['1d'].price_change > 0
                  ? 'caret-up-outline'
                  : 'caret-down-outline'
              }
              type="ionicon"
              size={15}
              tvParallaxProperties={undefined}
              iconStyle={
                item['1d'].price_change > 0
                  ? style.possitiveProgression
                  : style.negativeProgression
              }
            />
            <Text
              style={
                item['1d'].price_change > 0
                  ? style.possitiveProgression
                  : style.negativeProgression
              }
            >
              {calculatePercent(item['1d'].price_change, item.price)}
            </Text>
          </View>
        </View>
      </View>
      <Divider orientation="horizontal" style={style.divider} />
    </>
  );
}

const style = StyleSheet.create({
  divider: {
    marginBottom: Margin.marginDefaul,
  },
  mainContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  listItem: {
    borderRadius: 40,
    backgroundColor: ColorsPallete.blueGrey[50],
  },
  iconContainer: {
    flexDirection: 'row',
    width: '40%',
  },
  icon: {
    backgroundColor: ColorsPallete.darkBlue[700],
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  information: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  infomrationText: {
    color: '#fff',
  },
  chartContainer: {
    width: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    width: '20%',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
  },
  possitiveProgression: {
    color: ColorsPallete.green[500],
    fontWeight: '700',
  },
  negativeProgression: {
    color: ColorsPallete.red[500],
    fontWeight: '700',
  },
  percentContainer: {
    flexDirection: 'row',
  },
  priceSection: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 5,
  },
});
