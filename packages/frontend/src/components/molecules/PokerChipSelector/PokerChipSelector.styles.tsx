
import { css } from 'styled-components';
import { PokerChipSelectorStylesProps } from './PokerChipSelector';

/**
 * Base styles for the component
 *
 * @param {PokerChipSelectorStylesProps} props The PokerChipSelector properties object
 * @returns The base styles
 */
const baseStyles = (props: PokerChipSelectorStylesProps) => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 2rem;
  width: 100%;
`;



/**
 * The PokerChipSelector component styles
 * 
 * @param {PokerChipSelectorStylesProps} props The PokerChipSelector properties object
 */
export const styles = (props: PokerChipSelectorStylesProps) => css`
  ${baseStyles(props)}
`;