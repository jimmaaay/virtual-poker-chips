
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
  --chipColour: ${theme.chipColours[props.chipValue]};
  --textColour: ${theme.chipColours[props.chipValue]};

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
  background: transparent;

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

  .PokerChip-svgInner {
    stroke: var(--chipStrokeColour);
    stroke-width: 2px;
  }

  .PokerChip-text {
    position: relative;
    z-index: 1;
    color: var(--textColour);
  }
`;


/**
 * Unselected styles for the component
 *
 * @param {PokerChipProps} props The PokerChip properties object
 * @returns The unselected styles
 */
const unselectedStyles = (props: PokerChipProps) => {
  switch (props.unselected) {
    case true:
      return css`
        --chipColour: transparent !important;
        --chipStrokeColour: #fff;
        --chipColourInner: transparent;
        --textColour: #fff !important;
        opacity: 1 !important;

        .PokerChip-svg {
          stroke: #fff;
        }
      `;

    case false:
    default:
      return css`
        --chipStrokeColour: #000;
        --chipColourInner: #fff;
      `;
  }
}


/**
 * The PokerChip component styles
 * 
 * @param {PokerChipProps} props The PokerChip properties object
 */
export const styles = (props: PokerChipProps) => css`
  ${baseStyles(props)}
  ${unselectedStyles(props)}
`;