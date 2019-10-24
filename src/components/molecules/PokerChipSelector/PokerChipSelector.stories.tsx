
import React, { useState } from 'react';
import { PokerChipValues } from '../../atoms/PokerChip/PokerChip';
import { PokerChipSelector } from './PokerChipSelector';

export default {
  title: 'PokerChipSelector',
  component: PokerChipSelector,
};

export const basic = () => {
  const [selected, setSelected] = useState<PokerChipValues[]>([]);

  return (
    <PokerChipSelector
      selected={selected}
      onSelected={(newSelected) => setSelected(newSelected)}
    />
  );
}