
import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PokerChip, PokerChipValues } from './PokerChip';

export default {
  title: 'PokerChip',
  component: PokerChip,
};

export const basic = () => {
  const chipValue = select(
    'Chip value',
    {
      1: PokerChipValues.ONE,
      5: PokerChipValues.FIVE,
      10: PokerChipValues.TEN,
      25: PokerChipValues.TWENTY_FIVE,
      100: PokerChipValues.ONE_HUNDRED,
      500: PokerChipValues.FIVE_HUNDRED,
      1000: PokerChipValues.ONE_THOUSAND,
    },
    PokerChipValues.TEN
  );

  const disabled = boolean('Disabled', false);
  const unselected = boolean('Unselected', false);

  return (
    <PokerChip
      chipValue={chipValue}
      disabled={disabled}
      unselected={unselected}
      onClick={action('onClick')}
    />
  );
}