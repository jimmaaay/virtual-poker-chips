import React, { PropsWithChildren, MouseEventHandler } from 'react';
import { css } from 'glamor';

interface PokerChipProps {
  chipValue: 1 | 5 | 25 | 100 | 500;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const chipCSS = css({
  fontSize: '2rem',
  width: '8rem',
  height: '8rem',
  borderRadius: '50%',
  background: 'var(--chipColour)',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '&::before': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    background: 'var(--chipColour)',
    opacity: 0.4,
  }
});

const innerChipCSS = css({
  display: 'block',
  position: 'relative',
});

const chipColours: any = {
  1: {
    '--chipColour': 'yellow',
  },
};

const PokerChip = (props: PropsWithChildren<PokerChipProps>) => {
  const { onClick, chipValue } = props;
  const chipColour = chipColours[chipValue];

  return (
    <button
      { ...css(chipCSS, chipColour) }
      onClick={onClick}
    >
      <span { ...innerChipCSS }>
        { props.children }
      </span>
    </button>
  );
};

export default PokerChip;