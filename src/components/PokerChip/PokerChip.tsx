import React, { PropsWithChildren, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface PokerChipProps {
  /**
   * The value that the chip represents
   */
  chipValue: 1 | 5 | 10 | 25 | 100 | 500 | 1000;
  /**
   * A function that will be called when the PokerChip is clicked
   */
  onClick: any;
  // onClick: (args: { chipValue: number, event: MouseEventHandler<HTMLButtonElement> }) => void;

  /**
   * Controls the chip transparency
   */
  transparent?: boolean;
  /**
   * If the button should be in a disabled state
   */
  disabled?: boolean;
}

interface ChipButtonProps {
  chipColour: string;
  transparent: boolean;
  disabled: boolean;
}

interface ChipTextProps {
  transparent: boolean;
  disabled: boolean;
}

const ChipButton = styled.button<ChipButtonProps>`
  --chipColour: ${props => props.transparent || props.disabled ? 'transparent': props.chipColour}
  font-size: 2rem;
  font-family: inherit;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

export const chipColours: any = {
  1: '#b7b7b7',
  5: '#fb4626',
  10: '#4444ff',
  25: '#0e8c0e',
  100: '#333',
  500: '#cb00cb',
  1000: '#dccc29',
};

const ChipSVG = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ChipText = styled.span<ChipTextProps>`
  position: relative;
  color: ${props => props.transparent || props.disabled ? 'grey' : 'var(--chipColour)'};
`;

const PokerChip = (props: PropsWithChildren<PokerChipProps>) => {
  const {
    onClick,
    chipValue,
    disabled = false,
    transparent = false,
  } = props;
  const chipColour = chipColours[chipValue];

  return (
    <ChipButton
      transparent={transparent}
      chipColour={chipColour}
      onClick={(event) => {onClick({ event, chipValue })}}
      disabled={disabled}
    >
      <ChipSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.159 496.159">
        <path d="M248.083.003C111.071.003 0 111.063 0 248.085c0 137.001 111.07 248.07 248.083 248.07 137.006 0 248.076-111.069 248.076-248.07C496.159 111.062 385.089.003 248.083.003z" fill="var(--chipColour)" stroke="#000"/>
        <path d="M248.082 77.871c-94.006 0-170.213 76.2-170.213 170.212 0 93.999 76.207 170.205 170.213 170.205 94.001 0 170.208-76.206 170.208-170.205 0-94.013-76.206-170.212-170.208-170.212z" fill="#fff" stroke="#000"/>
        <path d="M248.082 91.37c-86.55 0-156.714 70.156-156.714 156.713 0 86.543 70.164 156.707 156.714 156.707 86.547 0 156.709-70.163 156.709-156.707 0-86.557-70.162-156.713-156.709-156.713z" fill="var(--chipColour)" stroke="#000" fillOpacity={0.2}/>
        <g fill="#fff" stroke="#000">
          <path d="M248.083.003a249.46 249.46 0 0 0-46.003 4.274v61.302h92V4.276A249.395 249.395 0 0 0 248.083.003zM202.08 429.579v62.301a249.382 249.382 0 0 0 46.003 4.275c15.718 0 31.089-1.479 45.997-4.274v-62.302h-92zM432.217 81.845l-52.496 31.903 47.78 78.62 52.681-32.016c-11.041-29.195-27.421-55.765-47.965-78.507zM68.66 302.79l-52.991 32.204c10.94 29.238 27.236 55.858 47.7 78.669l53.071-32.253-47.78-78.62zM427.624 302.385l-47.602 78.728 53.142 32.131c20.41-22.855 36.651-49.507 47.526-78.774l-53.066-32.085zM63.572 82.264c-20.492 22.786-36.818 49.388-47.793 78.612l52.757 31.898 47.602-78.728-52.566-31.782z"/>
        </g>
      </ChipSVG>
      <ChipText transparent={transparent} disabled={disabled}>
        { chipValue }
      </ChipText>
    </ChipButton>
  );
};

export default PokerChip;