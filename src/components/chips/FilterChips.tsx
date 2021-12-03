import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ColorsPallete } from '../../assets/styles/ColorsPallete';

export function FilterChip({ filter, action, activeFilters = [] }) {
  return (
    <TouchableOpacity
      onPress={() => action(filter.id)}
      style={[
        style.container,
        activeFilters.includes(filter.id) ? style.active : null,
      ]}
    >
      <View style={style.section}>
        <Text style={style.filterText}>{filter.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: ColorsPallete.darkBlue[300],
    borderRadius: 20,
    marginRight: 10,
  },
  section: {
    padding: 10,
  },
  filterText: {
    color: '#fff',
  },
  active: {
    borderColor: '#fff',
    borderWidth: 1,
  },
});
