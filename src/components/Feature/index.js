import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza do dia</h1>
      <p>Calabresa Especial</p>
      <FeatureButton>Fazer pedido</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
