import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { PokerChip, PokerChipValues, allValues } from '@texas/components/atoms/PokerChip/PokerChip';
import { styles } from './PokerChipHand.styles';

const StyledPokerChipHand = styled.div`
  ${styles}
`;

export interface PokerChipHandProps {
  chipCounts: {
    [PokerChipValues.ONE]: number;
    [PokerChipValues.FIVE]: number;
    [PokerChipValues.TEN]: number;
    [PokerChipValues.TWENTY_FIVE]: number;
    [PokerChipValues.ONE_HUNDRED]: number;
    [PokerChipValues.FIVE_HUNDRED]: number;
    [PokerChipValues.ONE_THOUSAND]: number;
  },

  /**
   * The handler that will be called when a poker chip is clicked
   */
  onChipClick: (chipValue: PokerChipValues, e: MouseEvent<HTMLElement>) => void;

  /**
   * The class to add to the component
   */
  className?: string;

  /**
   * The data-testid to add to the component
   */
  'data-testid'?: string;
}


export const PokerChipHand = (props: PokerChipHandProps) => {
  const { chipCounts, onChipClick } = props;
  return (
    <StyledPokerChipHand {...props}>
      { allValues.map((value) => {
        return (
          <div className="PokerChipHand-chip">
            <PokerChip
              chipValue={value}
              onClick={onChipClick}
              disabled={chipCounts[value] === 0}
              unselected={chipCounts[value] === 0}
            />
            <span className="PokerChipHand-chipCount">{ chipCounts[value] }</span>
          </div>
        )
      })}
    </StyledPokerChipHand>
  );
};



