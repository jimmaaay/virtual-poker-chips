import React, { useState } from 'react';
import styled from 'styled-components';
import { Heading, HeadingSize } from '@texas/components/atoms/Heading/Heading';
import { Button } from '@texas/components/atoms/Button/Button';
import { PokerChipValues } from '@texas/components/atoms/PokerChip/PokerChip';
import { PokerChipSelector } from '@texas/components/molecules/PokerChipSelector/PokerChipSelector';
import { styles } from './Setup.styles';

const StyledSetup = styled.div`
  ${styles}
`;

export interface SetupProps {
  /**
   * The class to add to the component
   */
  className?: string;

  /**
   * The data-testid to add to the component
   */
  'data-testid'?: string;
}


export const Setup = (props: SetupProps) => {
  const [selected, setSelected] = useState<PokerChipValues[]>([]);

  const handleOnSelected = (items: PokerChipValues[]) => {
    setSelected(items)
  };

  return (
    <StyledSetup {...props}>
      <Heading size={HeadingSize.H1}>Select poker chips</Heading>
      <PokerChipSelector
        selected={selected}
        onSelected={handleOnSelected}
      />

      <div className="button-container">
        <Button>Play</Button>
      </div>
    </StyledSetup>
  );
};



