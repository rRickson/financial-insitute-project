import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export function ETHSVG() {
  return (
    <Svg width={32} height={32}>
      <G fill="#FFF" fillRule="evenodd">
        <Path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z" />
        <G fillRule="nonzero">
          <Path fillOpacity={0.5} d="M16.498 4v8.87l7.497 3.35z" />
          <Path opacity={0.8} d="M16.498 4 9 16.22l7.498-3.35z" />
          <Path fillOpacity={0.5} d="M16.498 21.968v6.027L24 17.616z" />
          <Path opacity={0.796} d="M16.498 27.995v-6.028L9 17.616z" />
          <Path fillOpacity={0.5} d="m9 16.22 7.498 4.353v-7.701z" />
        </G>
      </G>
    </Svg>
  );
}
