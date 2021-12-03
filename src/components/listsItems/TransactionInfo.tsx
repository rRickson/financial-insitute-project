import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { ColorsPallete } from '../../assets/styles/ColorsPallete';
import { Margin } from '../../assets/styles/global';
import { LoansStatus } from '../../data/loan';
import { formatDate } from '../../utils/RequestUtil';

export function TransactionInfo({ item }) {
  const checkStatus = component => {
    switch (item.status) {
      case 0:
        switch (component) {
          case 'touchable':
            return style.pendingButton;
          default:
            return style.pendingButtonText;
        }
      case 1:
        switch (component) {
          case 'touchable':
            return style.paidButton;
          default:
            return style.paidButtonText;
        }
      case 2:
      case 3:
        switch (component) {
          case 'touchable':
            return style.payNowButton;
          default:
            return style.payNowButtonText;
        }
    }
  };
  return (
    <>
      <View style={style.mainContainer}>
        <View style={style.iconContainer}>
          <View style={style.icon}>
            <Icon
              name={item.type === 0 ? 'caret-up-outline' : 'caret-down-outline'}
              type="ionicon"
              size={30}
              tvParallaxProperties={undefined}
              iconStyle={
                item.type === 0
                  ? style.incomeTransactionText
                  : style.debitTransactionText
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
            disabled={item.status !== 2 && item.status !== 3 ? true : false}
            style={[style.statusButton, checkStatus('touchable')]}
          >
            <Text style={checkStatus('text')}>
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
    backgroundColor: '#fff',
  },
  information: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  infomrationText: {
    color: '#fff',
    fontWeight: '600',
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
  incomeTransactionText: {
    color: ColorsPallete.green[500],
    fontWeight: '700',
  },
  debitTransactionText: {
    color: ColorsPallete.red[500],
    fontWeight: '700',
  },
  priceSection: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 5,
  },
  statusButton: {
    borderWidth: 2,
    width: '100%',
    height: 50,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  paidButton: {
    borderColor: ColorsPallete.green[900],
  },
  payNowButton: {
    borderColor: ColorsPallete.red[500],
  },
  pendingButton: {
    borderColor: ColorsPallete.blueGrey[500],
  },
  paidButtonText: {
    color: ColorsPallete.green[900],
  },
  payNowButtonText: {
    color: ColorsPallete.red[500],
  },
  pendingButtonText: {
    color: ColorsPallete.blueGrey[500],
  },
});
