import React, { useState } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import styled from 'styled-components';
import PokerChip, { chipColours } from '../../components/PokerChip/PokerChip';
import Button from '../../components/Button/Button';
import { H2, H3 } from '../../components/Headings/Headings';

const ChipSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 2rem;
  margin: 0 0 2rem;
`;

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
      <H2>Select chip denominations to play with</H2>
      <H3>{selectedChips.length} chips selected</H3>
      <ChipSection>
        { Object.keys(chipColours).map((chipValueText) => {
          const chipValue = parseInt(chipValueText)
          const transparent = !selectedChips.includes(chipValue);
          return (
            <PokerChip
              key={chipValue}
              chipValue={chipValue as any}
              transparent={transparent}
              onClick={(args: any) => toggleSelectedChip(args.chipValue)}
            />
          )
        }) }
      </ChipSection>
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