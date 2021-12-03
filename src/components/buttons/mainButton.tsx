import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

export function MainButton({ button, action, highlight }) {
  return (
    <View style={[style.iconContainer, highlight ? style.highlight : null]}>
      <TouchableOpacity style={style.iconAlign} onPress={action}>
        {button.icon ? (
          <Icon
            name={button.icon}
            color="#fff"
            type="feather"
            tvParallaxProperties={undefined}
          />
        ) : null}
        <Text style={style.text}>{button.name}</Text>
      </TouchableOpacity>
      {highlight ? (
        <Icon
          name={'star'}
          color="#FFD700"
          tvParallaxProperties={undefined}
          containerStyle={style.iconHighlight}
        />
      ) : null}
    </View>
  );
}

const style = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'rgba(55,71,79,0.5)',
    borderRadius: 15,
    marginBottom: 20,
    padding: 20,
  },

  iconAlign: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
  highlight: {
    borderColor: '#FFD700',
    borderWidth: 1,
  },
  iconHighlight: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
});
