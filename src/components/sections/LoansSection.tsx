import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CardFeature } from '../../assets/images/svg/cardFeature';
import { ColorsPallete } from '../../assets/styles/ColorsPallete';
import { Margin } from '../../assets/styles/global';
import { loansList } from '../../data/loan';
import { MainButton } from '../buttons/mainButton';
import { SectionButtons } from '../buttons/sectionButtons';
import { TransactionInfo } from '../listsItems/TransactionInfo';

const buttonList = [
  { name: 'Credit Review', icon: 'dollar-sign' },
  { name: 'Invoice', icon: 'arrow-up-right' },
];
const feature = {
  headline: 'PAY WITHIN 12 MONTHS',
  caption: 'LOANS TO CRYPTO UP TO',
  price: '$50,000',
};

export function LoansSection({ openFeature }) {
  const featureProduct = true;
  const renderButtons = () => {
    return buttonList.map(item => {
      return <SectionButtons action={null} button={item} key={item.name} />;
    });
  };

  const renderLoanList = () => {
    const sorted = loansList.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return sorted.map(item => {
      return <TransactionInfo item={item} key={item.id} />;
    });
  };

  return (
    <View style={style.mainContainer}>
      {featureProduct ? (
        <View style={style.cardFeature}>
          <CardFeature feature={feature} />
        </View>
      ) : null}
      <View style={style.optionsList}>
        {renderButtons()}
        <MainButton
          highlight={featureProduct}
          button={{ name: 'Apply for a Loan' }}
          action={openFeature}
        />
      </View>
      <View style={style.cryptoList}>{renderLoanList()}</View>
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
    marginTop: 10,
  },
  cardFeature: {
    marginTop: Margin.marginDefaul,
    marginBottom: Margin.marginDefaul,
  },
});
