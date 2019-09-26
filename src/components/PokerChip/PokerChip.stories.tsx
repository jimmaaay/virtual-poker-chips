import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import PokerChip from './PokerChip';

export default {
  title: 'PokerChip',
  component: PokerChip,
}

export const colours = () => (
  <Fragment>
    <PokerChip
      chipValue={1}
      onClick={action('clicked')}
    >
      100
    </PokerChip>
  </Fragment>
);