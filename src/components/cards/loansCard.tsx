import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import { ColorsPallete } from '../../assets/styles/ColorsPallete';
import { MainStyle } from '../../assets/styles/global';

export function LoanCard({ loan }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerSection}>
        <View style={styles.institutionInfo}>
          <Text style={styles.loanTypeText}>{loan.type}</Text>
          <Text style={MainStyle.informationTitle}>Cash Loan</Text>
          <Text style={styles.bankNameText}>{loan.bank} </Text>
        </View>
        <View style={styles.institutionLogo}>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: loan.image_url,
            }}
          />
        </View>
      </View>
      <Divider orientation="horizontal" style={styles.divider} />
      <View style={styles.informationSection}>
        <View style={styles.section1}>
          <View style={styles.amountSection}>
            <Text style={[MainStyle.informationTitle]}>Amount</Text>
            <Text style={styles.priceTexts}>{loan.amount}</Text>
          </View>

          <View style={styles.rateSection}>
            <Text style={[MainStyle.informationTitle]}>Rate</Text>
            <Text>{`from ${loan.rate}%`}</Text>
          </View>
        </View>
        <View style={styles.section1}>
          <View style={styles.montlyPaymentSection}>
            <Text style={[MainStyle.informationTitle]}>Montly Payment</Text>
            <Text style={styles.priceTexts}>{loan.montly_pay}</Text>
          </View>

          <View style={styles.periodSection}>
            <Text style={[MainStyle.informationTitle]}>Period</Text>
            <Text>{`${loan.period} months`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: ColorsPallete.darkBlue[500],
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  headerSection: {
    padding: 15,
    flexDirection: 'row',
  },
  informationSection: {
    padding: 15,
    flexDirection: 'row',
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
  },
  institutionInfo: {
    width: '70%',
  },
  institutionLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loanTypeText: {},
  bankNameText: {},
  section1: {
    width: '50%',
  },
  section2: {
    width: '50%',
  },
  amountSection: {
    marginBottom: 10,
  },
  rateSection: {},
  montlyPaymentSection: {
    marginBottom: 10,
  },
  periodSection: {},
  priceTexts: {
    fontWeight: '600',
    fontSize: 22,
  },
});
