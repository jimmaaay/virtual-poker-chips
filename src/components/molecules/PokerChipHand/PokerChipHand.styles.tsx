
import { css } from 'styled-components';
import { PokerChipHandProps } from './PokerChipHand';

/**
 * Base styles for the component
 *
 * @param {PokerChipHandProps} props The PokerChipHand properties object
 * @returns The base styles
 */
const baseStyles = (props: PokerChipHandProps) => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 2rem;
  position: relative;
  width: 100%;

  .PokerChipHand-chip {
    position: relative;
  }

  .PokerChipHand-chipCount {
    position: absolute;
    right: 0;
    bottom: 0;
    background: #fff;
    color: #333;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    min-width: 3rem;
    text-align: center;
  }
`;



/**
 * The PokerChipHand component styles
 * 
 * @param {PokerChipHandProps} props The PokerChipHand properties object
 */
export const styles = (props: PokerChipHandProps) => css`
  ${baseStyles(props)}
`;