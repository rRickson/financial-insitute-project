import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { ColorsPallete } from '../../assets/styles/ColorsPallete';
import { Margin } from '../../assets/styles/global';
import { LoansStatus } from '../../data/loan';
import { formatDate } from '../../utils/RequestUtil';

export function TransactionInfo({ item }) {
  return (
    <>
      <View style={style.mainContainer}>
        <View style={style.iconContainer}>
          <View
            style={[style.icon, item.type === 0 ? style.income : style.debit]}
          >
            <Icon
              name={item.type === 0 ? 'caret-up-outline' : 'caret-down-outline'}
              type="ionicon"
              size={30}
              tvParallaxProperties={undefined}
              iconStyle={
                item.type === 0
                  ? style.possitiveProgression
                  : style.negativeProgression
              }
            />
          </View>
          <View style={style.information}>
            <Text style={style.infomrationText}>{item.name}</Text>
            <Text style={style.infomrationText}>
              {formatDate(item.payment_date ? item.payment_date : item.date)}
            </Text>
          </View>
        </View>
        <View style={style.priceContainer}>
          <Text style={style.priceSection}>
            {`$${Number(item.price).toFixed(2)}`}
          </Text>
        </View>
        <View style={style.statusContainer}>
          <TouchableOpacity
            disabled={item.status !== 2 ? true : false}
            style={[
              style.statusButton,
              item.status === 2
                ? style.payNowButton
                : item.status === 0
                ? style.pendingButton
                : style.paidButton,
            ]}
          >
            <Text>
              {item.status === 2 ? 'Pay Now' : LoansStatus[item.status]}
            </Text>
          </TouchableOpacity>
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
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  income: {
    backgroundColor: ColorsPallete.green[100],
  },
  debit: {
    backgroundColor: ColorsPallete.red[100],
  },
  information: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  infomrationText: {
    color: '#fff',
  },
  priceContainer: {
    width: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContainer: {
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
  statusButton: {
    borderColor: '#fff',
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paidButton: {
    backgroundColor: ColorsPallete.green[100],
  },
  payNowButton: {
    backgroundColor: ColorsPallete.red[100],
  },
  pendingButton: {
    backgroundColor: ColorsPallete.blueGrey[50],
  },
});
