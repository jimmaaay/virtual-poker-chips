import React from 'react';
import { action } from '@storybook/addon-actions';
import PokerChip from './PokerChip';

export default {
  title: 'PokerChip',
  component: PokerChip,
}

export const colours = () => (
  <div>
    <PokerChip
      chipValue={1}
      onClick={action('clicked')}
    >
      100
    </PokerChip>
  </div>
);