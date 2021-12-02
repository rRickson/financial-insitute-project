import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Overlay } from 'react-native-elements';
import { ColorsPallete } from '../../assets/styles/ColorsPallete';
export function ResponseAlert({ alert, action, status }) {
  const informations = {
    text: '',
    buttonIcon: '',
    buttonTitle: '',
    mainIcon: '',
    mainIconColor: '',
  };
  const [alertInformation, setInformation] = useState(informations);

  const renderInformation = () => {
    const message = {
      complete: {
        text: 'Request complete',
        mainIcon: 'checkbox-outline',
        mainIconColor: ColorsPallete.green[500],
        buttonTitle: 'Confirm',
        buttonIcon: 'checkmark-circle-outline',
      },
      warning: {
        text: 'Do you really wanna do this action?',
        mainIcon: 'alert-circle-outline',
        mainIconColor: ColorsPallete.orange[500],
        buttonTitle: 'Confirm ',
        buttonIcon: 'checkmark-circle-outline',
      },
      error: {
        text: 'Error on try request',
        mainIcon: 'alert-circle-outline',
        mainIconColor: ColorsPallete.red[500],
        buttonTitle: 'Confirm',
        buttonIcon: '',
      },
    };

    setInformation(message[status]);
  };

  useEffect(renderInformation, [alert, status]);

  return (
    <>
      <Overlay
        isVisible={alert}
        onBackdropPress={action}
        overlayStyle={style.overlay}
      >
        <Icon
          name={alertInformation.mainIcon}
          color={alertInformation.mainIconColor}
          type="ionicon"
          tvParallaxProperties={undefined}
          size={50}
        />
        <Text style={style.text}>{alertInformation.text}</Text>
        <View style={style.buttonContainer}>
          <Button
            buttonStyle={style.button}
            icon={
              <Icon
                name="checkmark-circle-outline"
                size={30}
                color={'#fff'}
                tvParallaxProperties={undefined}
                type="ionicon"
              />
            }
            title={alertInformation.buttonTitle}
            onPress={action}
          />
        </View>
      </Overlay>
    </>
  );
}
const style = StyleSheet.create({
  overlay: {
    width: '90%',
    height: '20%',
    borderRadius: 15,
    borderColor: ColorsPallete.skyOcean[900],
    borderWidth: 3,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  button: {
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: ColorsPallete.skyOcean[400],
    borderColor: ColorsPallete.skyOcean[400],
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
  },
});
