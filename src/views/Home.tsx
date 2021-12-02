import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorsPallete } from '../assets/styles/ColorsPallete';
import { ResponseAlert } from '../components/alerts/ResponseAlert';
import { GroupButtons } from '../components/buttons/GroupButtons';
import { ProfileHeader } from '../components/ProfileHeader';
import { CreditCardSection } from '../components/sections/CreditCardSection';
import { CryotoSection } from '../components/sections/CryptoSection';
import { CurrenciesService } from '../services/CurrenciesService';

const user = { name: 'Rickson', visibility: false };
const responseStatus = 'error';
const groupButtons = ['My Crypto', 'My Card'];

export function Home() {
  useEffect(() => {
    // loadCurrencies();
  });

  const [visibility, setVisibility] = useState(user.visibility);
  const [alert, setAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState(responseStatus);
  const [groupButtonSelected, setGroupButtonSelected] = useState(0);

  const loadCurrencies = async () => {
    const data = await CurrenciesService.loadCurrencies();
    if (data.status === 400) {
      setAlertStatus('error');
      toggleAlert();
    }
  };

  const toggleAlert = () => {
    setAlert(!alert);
  };

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <ResponseAlert alert={alert} action={toggleAlert} status={alertStatus} />
      <SafeAreaView style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfileHeader
            user={user}
            action={changeVisibility}
            visibility={visibility}
          />
          <GroupButtons
            buttons={groupButtons}
            select={groupButtonSelected}
            action={index => setGroupButtonSelected(index)}
          />
          {groupButtonSelected === 0 ? (
            <CryotoSection />
          ) : (
            <CreditCardSection />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsPallete.darkBlue[500],
    padding: 10,
  },

  MainText: {
    fontSize: 20,
    color: '#000',
    flex: 1,
  },
});
