import React, { PropsWithChildren, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface PokerChipProps {
  chipValue: 1 | 5 | 25 | 100 | 500;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface ChipButtonProps {
  chipColour: string;
}

const ChipButton = styled.button<ChipButtonProps>`
  --chipColour: ${props => props.chipColour}

  font-size: 2rem;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: var(--chipColour);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const chipColours: any = {
  1: 'yellow',
};

const PokerChip = (props: PropsWithChildren<PokerChipProps>) => {
  const { onClick, chipValue } = props;
  const chipColour = chipColours[chipValue];

  return (
    <ChipButton
      chipColour={chipColour}
      onClick={onClick}
    >
      <span>
        { props.children }
      </span>
    </ChipButton>
  );
};

export default PokerChip;