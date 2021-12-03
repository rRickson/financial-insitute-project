import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStyle, Margin } from '../assets/styles/global';
import { LoanCard } from '../components/cards/loansCard';
import { FilterChip } from '../components/chips/FilterChips';
import { BackHeader } from '../components/sections/BackHeader';
import { loansFilter, loansOptions } from '../data/loansOptions';

export function LoansView({ navigation }) {
  const [activeFilters, setActiveFilters] = useState([]);

  const goBack = () => {
    navigation.goBack();
  };

  const renderLoansList = () => {
    return loansOptions.map(item => {
      return <LoanCard loan={item} key={item.id} />;
    });
  };

  const filter = filterId => {
    activeFilters.includes(filterId)
      ? activeFilters.splice(activeFilters.indexOf(filterId))
      : activeFilters.push(filterId);
    setActiveFilters(activeFilters);
  };

  const renderFilters = () => {
    return loansFilter.map(item => {
      return (
        <FilterChip
          filter={item}
          activeFilters={activeFilters}
          key={item.id}
          action={filter}
        />
      );
    });
  };

  return (
    <>
      <SafeAreaView style={MainStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.navBar}>
            <BackHeader goBackAction={goBack} />
          </View>
          <View style={style.header}>
            <Text style={MainStyle.pageTitle}>Loans</Text>
            <View style={style.filterSection}>{renderFilters()}</View>
            <Text style={[MainStyle.pageSection, style.pageSection]}>
              Best Offers
            </Text>
          </View>
          <View style={style.loanCard}>{renderLoansList()}</View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {},
  navBar: {},
  header: {
    marginTop: 5,
  },
  pageTitle: {},
  loanCard: {
    marginTop: Margin.marginDefaul,
  },
  pageSection: {
    marginTop: 5,
  },
  filterSection: {
    flex: 1,
    flexDirection: 'row',
  },
});
