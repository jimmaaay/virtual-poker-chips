import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { styles } from './PokerChip.styles';


/**
 * All possible poker chip values
 */
export enum PokerChipValues {
  ONE = 1,
  FIVE = 5,
  TEN = 10,
  TWENTY_FIVE = 25,
  ONE_HUNDRED = 100,
  FIVE_HUNDRED = 500,
  ONE_THOUSAND = 1000,
};

export const allValues = [
  PokerChipValues.ONE,
  PokerChipValues.FIVE,
  PokerChipValues.TEN,
  PokerChipValues.TWENTY_FIVE,
  PokerChipValues.ONE_HUNDRED,
  PokerChipValues.FIVE_HUNDRED,
  PokerChipValues.ONE_THOUSAND,
];

export interface PokerChipProps {
  /**
   * The value that the chip represents
   */
  chipValue: PokerChipValues;

  /**
   * If the component should be disabled
   */
  disabled?: boolean;

  /**
   * If unselected styles should be applied
   */
  unselected?: boolean;

  /**
   * A handler that will be fired when the component is clicked
   */
  onClick?: (chipValue: PokerChipValues, event: MouseEvent<HTMLElement>) => void;

  /**
   * The class to add to the component
   */
  className?: string;

  /**
   * The data-testid to add to the component
   */
  'data-testid'?: string;
}

// Fixes an error with onClick typing
type PokerChipOnClickFix = PokerChipProps & { onClick: any };

const StyledPokerChip = styled.button<PokerChipOnClickFix>`
  ${styles}
`;

export const PokerChip = (props: PokerChipProps) => {
  const { chipValue, onClick } = props;

  return (
    <StyledPokerChip
      {...props}
      onClick={(e: MouseEvent<HTMLElement>) => {
        onClick && onClick(chipValue, e); 
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.159 496.159" className="PokerChip-svg">
        <path d="M248.083.003C111.071.003 0 111.063 0 248.085c0 137.001 111.07 248.07 248.083 248.07 137.006 0 248.076-111.069 248.076-248.07C496.159 111.062 385.089.003 248.083.003z" fill="var(--chipColour)" stroke="var(--chipStrokeColour)"/>
        <path d="M248.082 77.871c-94.006 0-170.213 76.2-170.213 170.212 0 93.999 76.207 170.205 170.213 170.205 94.001 0 170.208-76.206 170.208-170.205 0-94.013-76.206-170.212-170.208-170.212z" fill="var(--chipColourInner)" stroke="var(--chipStrokeColour)"/>
        <path d="M248.082 91.37c-86.55 0-156.714 70.156-156.714 156.713 0 86.543 70.164 156.707 156.714 156.707 86.547 0 156.709-70.163 156.709-156.707 0-86.557-70.162-156.713-156.709-156.713z" fill="var(--chipColour)" stroke="var(--chipStrokeColour)" fillOpacity={0.2}/>
        <g className="PokerChip-svgInner" stroke="var(--chipStrokeColour)" fill="var(--chipColourInner)">
          <path d="M248.083.003a249.46 249.46 0 0 0-46.003 4.274v61.302h92V4.276A249.395 249.395 0 0 0 248.083.003zM202.08 429.579v62.301a249.382 249.382 0 0 0 46.003 4.275c15.718 0 31.089-1.479 45.997-4.274v-62.302h-92zM432.217 81.845l-52.496 31.903 47.78 78.62 52.681-32.016c-11.041-29.195-27.421-55.765-47.965-78.507zM68.66 302.79l-52.991 32.204c10.94 29.238 27.236 55.858 47.7 78.669l53.071-32.253-47.78-78.62zM427.624 302.385l-47.602 78.728 53.142 32.131c20.41-22.855 36.651-49.507 47.526-78.774l-53.066-32.085zM63.572 82.264c-20.492 22.786-36.818 49.388-47.793 78.612l52.757 31.898 47.602-78.728-52.566-31.782z"/>
        </g>
      </svg>
      <span className="PokerChip-text">
        { chipValue }
      </span>
    </StyledPokerChip>
  );
};



