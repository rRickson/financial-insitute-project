import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { ColorsPallete } from '../assets/styles/ColorsPallete';
import { Fonts } from '../assets/styles/global';

export function ProfileHeader({ user, action, visibility }) {
  return (
    <View style={style.mainContainer}>
      <View style={style.iconContainer}>
        <Avatar
          rounded
          containerStyle={style.avatar}
          source={require('../assets/images/avatars/avatar.jpg')}
        />
      </View>
      <View style={style.greetingContainer}>
        <Text style={[Fonts.Subtitle, style.greetingMessage]}>
          Welcome {user.name}!
        </Text>
      </View>
      <View style={style.iconContainer}>
        <TouchableOpacity style={style.iconAlign} onPress={action}>
          {visibility ? (
            <Icon
              name={'eye-off-outline'}
              color="#fff"
              type="ionicon"
              tvParallaxProperties={undefined}
            />
          ) : (
            <Icon
              name={'eye-outline'}
              color="#fff"
              type="ionicon"
              tvParallaxProperties={undefined}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  greetingContainer: {
    padding: 5,
    width: '70%',
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'center',
    flex: 1,
  },
  greetingMessage: {
    textAlign: 'center',
  },
  visibility: {
    flexDirection: 'column',
    textAlign: 'right',
    flex: 1,
    height: '50%',
    width: 10,
  },
  iconAlign: {
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    backgroundColor: ColorsPallete.blueGrey[600],
    borderRadius: 15,
    width: '15%',
    alignSelf: 'center',
    height: 50,
  },
});
