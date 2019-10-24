
import { css } from 'styled-components';
import { PokerChipSelectorProps } from './PokerChipSelector';

/**
 * Base styles for the component
 *
 * @param {PokerChipSelectorProps} props The PokerChipSelector properties object
 * @returns The base styles
 */
const baseStyles = (props: PokerChipSelectorProps) => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 2rem;
  width: 100%;
`;



/**
 * The PokerChipSelector component styles
 * 
 * @param {PokerChipSelectorProps} props The PokerChipSelector properties object
 */
export const styles = (props: PokerChipSelectorProps) => css`
  ${baseStyles(props)}
`;