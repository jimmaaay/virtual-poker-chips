
import React from 'react';
import { Store, State } from '@sambego/storybook-state';
import { PokerChipValues } from '../../atoms/PokerChip/PokerChip';
import { PokerChipSelector } from './PokerChipSelector';

const store = new Store({
  selected: [] as PokerChipValues[],
});

export default {
  title: 'PokerChipSelector',
  component: PokerChipSelector,
};

export const basic = () => {
  return (
    <State store={store}>
      <PokerChipSelector
        selected={store.get('selected')}
        onSelected={(newSelected) => store.set({ selected: newSelected })}
      />
    </State>
  );
}