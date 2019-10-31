
import React from 'react';
import { Store, State } from '@sambego/storybook-state';
import { PokerChipValues } from '@texas/components/atoms/PokerChip/PokerChip';
import { PokerChipHand } from './PokerChipHand';

const store = new Store({
  chipCounts: {
    [PokerChipValues.ONE]: 20,
    [PokerChipValues.FIVE]: 20,
    [PokerChipValues.TEN]: 10,
    [PokerChipValues.TWENTY_FIVE]: 100,
    [PokerChipValues.ONE_HUNDRED]: 1,
    [PokerChipValues.FIVE_HUNDRED]: 0,
    [PokerChipValues.ONE_THOUSAND]: 3,
  }
});

export default {
  title: 'PokerChipHand',
  component: PokerChipHand,
};

export const basic = () => {

  return (
    <State store={store}>
      {({ chipCounts }) => (
        <PokerChipHand
          chipCounts={chipCounts}
          onChipClick={(chipValue) => {
            const newChipCounts = {
              ...chipCounts,
              [chipValue]: chipCounts[chipValue] - 1,
            };
            
            store.set({ chipCounts: newChipCounts });
          }}
        />
      )}
    </State>
  );
}