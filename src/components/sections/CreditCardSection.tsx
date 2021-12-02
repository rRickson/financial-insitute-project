import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { transactionList } from '../../data/transaction';
import { GroupButtons } from '../buttons/GroupButtons';
import { CreditCardCarousel } from '../CreditCardCarousel';
import { SingleItemInformation } from '../SingleItemInformation';
const groupButtons = ['Deposit', 'Withdraw', 'Purchases'];

export function CreditCardSection() {
  const [groupButtonSelected, setGroupButtonSelected] = useState(0);
  const renderedList = transactionList;

  const renderList = () => {
    const filterArray = renderedList.filter(item => {
      return item.type === groupButtonSelected;
    });
    return filterArray.map(item => {
      return <SingleItemInformation item={item} key={item.index} />;
    });
  };

  const changeSection = async selected => {
    setGroupButtonSelected(selected);
  };

  return (
    <View style={style.mainContainer}>
      {/* <View style={style.headerContainer}>
        <View style={style.valuesSection}>
          <Text style={style.currenciesValue}>{'$ 64,900.26'}</Text>
          <Text style={style.cryptoValue}>{'BTC = $64,900.26'}</Text>
        </View>
      </View> */}
      <CreditCardCarousel />
      <View style={style.listSection}>
        <GroupButtons
          select={groupButtonSelected}
          buttons={groupButtons}
          action={index => changeSection(index)}
        />
        {renderList()}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    flex: 1,
  },
  valuesSection: {
    flexDirection: 'column',
    width: '50%',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  currenciesValue: {
    color: '#fff',
    fontSize: 30,
  },
  cryptoValue: {
    color: '#fff',
    fontSize: 15,
  },
  listSection: {
    marginTop: -40,
  },
});
