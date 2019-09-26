import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import PokerChip, { chipColours } from './PokerChip';

export default {
  title: 'PokerChip',
  component: PokerChip,
}

export const colours = () => (
  <Fragment>
    { Object.keys(chipColours).map((chipValue) => {
      return (
        <PokerChip
          chipValue={parseInt(chipValue) as any}
          onClick={action('clicked')}
        />
      );
    }) }
  </Fragment>
);

export const transparent = () => (
  <Fragment>
    <PokerChip
      chipValue={500}
      onClick={action('clicked')}
    />
    <PokerChip
      chipValue={500}
      onClick={action('clicked')}
      transparent
    />
  </Fragment>
);

export const disabled = () => (
  <Fragment>
    <PokerChip
      chipValue={500}
      onClick={action('clicked')}
    />
    <PokerChip
      chipValue={500}
      onClick={action('clicked')}
      disabled
    />
  </Fragment>
);