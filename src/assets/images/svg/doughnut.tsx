import React, { useEffect, useState } from 'react';
import Svg, { Circle, G, Text } from 'react-native-svg';
import { GenerateColor } from '../../styles/global';
export function DoughnutSVG({ assetsList }) {
  const [balance, setBalance] = useState('0');
  const [bitcoinBalance, setBitcoinBalance] = useState('0');
  const [userTotalAsset, setUserTotalAsset] = useState(0);
  const offSet = 15;

  const processAssetsList = () => {
    let newBalance = 0;
    let btcPrice = 0;
    let assets = 0;

    assetsList.forEach(asset => {
      newBalance += asset.user_asset * asset.price;
      assets += Number(asset.user_asset);
      if (asset.id === 'BTC') {
        btcPrice = asset.price;
      }
    });
    setBalance(newBalance.toFixed(2));
    setBitcoinBalance((newBalance / btcPrice).toFixed(4));
    setUserTotalAsset(Math.round(assets * 100) / 100);
  };

  useEffect(processAssetsList, [assetsList]);
  const calculatePercentage = user_asset => {
    let percent = Number(((user_asset / userTotalAsset) * 100).toFixed(2));

    return percent;
  };

  const renderDoughnut = () => {
    return assetsList.map((asset, index) => {
      let percent = calculatePercentage(asset.user_asset);
      asset.percent = isFinite(percent) ? percent : 0;
      asset.offSet = offSet;

      if (assetsList[index - 1]) {
        asset.offSet =
          100 - assetsList[index - 1].percent + assetsList[index - 1].offSet;
      }

      return (
        <Circle
          key={asset.id}
          cx={21}
          cy={21}
          r={15.915}
          fill="transparent"
          stroke={GenerateColor()}
          strokeWidth={1}
          strokeDasharray={
            isFinite(percent) ? `${percent} ${100 - Number(percent)}` : 0
          }
          strokeDashoffset={isFinite(asset.offSet) ? asset.offSet : offSet}
        />
      );
    });
  };

  return (
    <Svg width="100%" height={300} viewBox="0 0 42 42">
      {renderDoughnut()}
      <G>
        <Text fill="#fff" transform="translate(12.5 16)" fontSize={2.495}>
          Total balance
        </Text>
        <Text fill="#fff" transform="translate(8 22.2)" fontSize={4.7}>
          {`$${balance}`}
        </Text>
        <Text fill="#fff" transform="translate(12 27)" fontSize={2.495}>
          {`BTC = ${bitcoinBalance}`}
        </Text>
      </G>
    </Svg>
  );
}
