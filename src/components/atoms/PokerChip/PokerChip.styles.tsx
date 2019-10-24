
import { css } from 'styled-components';
import { darken } from 'polished';
import { theme } from '../../../config/theme'
import { PokerChipProps } from './PokerChip';


/**
 * Base styles for the component
 *
 * @param {PokerChipProps} props The PokerChip properties object
 * @returns The base styles
 */
const baseStyles = (props: PokerChipProps) => css`
  --chipColour: ${
    props.unselected
      ? darken(0.5, theme.chipColours[props.chipValue])
      : theme.chipColours[props.chipValue]
  };
  --textColour: ${
    props.unselected
      ? darken(0.5, theme.chipColours[props.chipValue])
      : theme.chipColours[props.chipValue]
  };
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

  &[disabled] {
    cursor: default;
    opacity: 0.5;
    --chipColour: transparent;
    --textColour: #000;
  }

  .PokerChip-svg {
    fill: var(--chipColour);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .PokerChip-text {
    position: relative;
    z-index: 1;
    color: var(--textColour);
  }
`;



/**
 * The PokerChip component styles
 * 
 * @param {PokerChipProps} props The PokerChip properties object
 */
export const styles = (props: PokerChipProps) => css`
  ${baseStyles(props)}
`;