import React, { useState } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import PokerChip, { chipValues } from '../../components/PokerChip/PokerChip';
import Button from '../../components/Button/Button';
import { H1, H2 } from '../../components/Headings/Headings';
import PokerChipSection from '../../components/PokerChipSection/PokerChipSection';

const ChipSelector = (props: RouteComponentProps) => {

  const [state, setState] = useState({
    selectedChips: [] as number[],
    loading: false,
  });

  const { selectedChips, loading } = state;

  const toggleSelectedChip = (chipValue: number) => {
    let chips = [ ...selectedChips ];
    if (chips.includes(chipValue)) {
      chips = chips.filter(value => value !== chipValue);
    } else {
      chips.push(chipValue);
    }

    setState({
      ...state,
      selectedChips: chips,
    });
    
  };

  const continueClick = () => {
    setState({
      ...state,
      loading: true,
    });

    setTimeout(() => { // Dummy ajax request to setup the game
      navigate('/game/1');
    }, 1000);
  };

  return (
    <section>
      <H1>Select chip denominations to play with</H1>
      <H2>{selectedChips.length} chips selected</H2>
      <PokerChipSection>
        { chipValues.map((chipValue) => {
          const transparent = !selectedChips.includes(chipValue);
          return (
            <PokerChip
              key={chipValue}
              chipValue={chipValue as any}
              transparent={transparent}
              onClick={(args: any) => toggleSelectedChip(args.chipValue)}
            />
          );
        }) }
      </PokerChipSection>
      <Button
        disabled={selectedChips.length === 0}
        loading={loading}
        onClick={continueClick}
      >
        Continue
      </Button>
    </section>
  );
};

export default ChipSelector;