import moment from 'moment';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

import { ColorsPallete } from '../assets/styles/ColorsPallete';
import { Fonts } from '../assets/styles/global';
import { bitcoinMarketPrice } from '../utils/BitcoinUtil';
import { transactionStatus } from '../utils/TransactionsStatus';

export function SingleItemInformation({ item }) {
  const convertBitcoin = balance => {
    balance = balance.replace(/[$,]/g, '');
    let bitcoinValue = (balance / bitcoinMarketPrice).toFixed(5);
    return bitcoinValue;
  };

  return (
    <View style={style.mainContainer} key={item.index}>
      <View style={style.informationContainer}>
        <View style={style.information}>
          <Text style={style.mainText}>
            {
              transactionStatus.find(
                itemStatus => itemStatus.status === item.status,
              ).text
            }
          </Text>
          <Text
            numberOfLines={1}
            style={[style.informationTransactionId, style.subText]}
          >
            {item.transaction_id}
          </Text>
        </View>
        <View style={style.value}>
          <Text style={style.mainText}>{item.balance}</Text>
          <Text style={style.subText}>{`BTC = ${convertBitcoin(
            item.balance,
          )}`}</Text>
        </View>
      </View>
      <Divider orientation="horizontal" />
      <View style={style.dateContainer}>
        <Text style={Fonts.WhiteText}>Date</Text>
        <Text style={style.dateText}>
          {moment(item.registered).format('MMMM DD, YYYY hh:mm')}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorsPallete.darkBlue[400],
    width: '100%',
    height: 80,
    marginBottom: 10,
    borderRadius: 20,
    fontColor: '#fff',
    padding: Platform.OS === 'ios' ? 7 : 5,
  },
  informationContainer: {
    flexDirection: 'row',
    height: '70%',
  },
  dateContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  information: {
    width: '100%',
    justifyContent: 'center',
  },
  value: {
    width: '30%',
    alignItems: 'flex-end',
    fontColor: '#fff',
    flex: 1,
    position: 'absolute',
    right: 0,
    height: '100%',
    backgroundColor: 'rgba(53,88,118,0.9)',
    justifyContent: 'center',
  },
  informationTransactionId: {},
  mainText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    color: '#fff',
  },
  dateText: {
    textAlign: 'right',
    color: '#fff',
    right: 0,
    flexGrow: 1,
    justifyContent: 'center',
  },
});
