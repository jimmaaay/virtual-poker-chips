import React from 'react';
import styled from 'styled-components';
import { PokerChip, PokerChipValues } from '../../atoms/PokerChip/PokerChip';
import { styles } from './PokerChipSelector.styles';

const StyledPokerChipSelector = styled.div`
  ${styles}
`;

export interface PokerChipSelectorProps {

  /**
   * The selected poker chips
   */
  selected: PokerChipValues[];

  /**
   * A function called when the selected poker chips change
   */
  onSelected: (selected: PokerChipValues[]) => void;

  /**
   * The class to add to the component
   */
  className?: string;

  /**
   * The data-testid to add to the component
   */
  'data-testid'?: string;
}


export const PokerChipSelector = (props: PokerChipSelectorProps) => {
  const { selected, onSelected } = props;
  const values = Object.entries(PokerChipValues)
    .filter(([key]) => {
      return /^[A-Z_]+$/.test(key);
    })
    .map(([key, value]) => value);

  return (
    <StyledPokerChipSelector {...props}>
      { values.map((chipValue) => {
        return (
          <PokerChip
            chipValue={chipValue as any}
            key={chipValue}
            unselected={!selected.includes(chipValue as number)}
            onClick={(chipValue) => {
              const newSelected = [...selected];
              if (!newSelected.includes(chipValue)) {
                newSelected.push(chipValue);
              } else {
                newSelected.splice(newSelected.indexOf(chipValue), 1);
              }

              onSelected(newSelected);
            }}
            data-testid={`PokerChip-${chipValue}`}
          />
        );
      })}
    </StyledPokerChipSelector>
  );
};



