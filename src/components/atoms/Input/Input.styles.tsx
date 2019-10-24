
import { css } from 'styled-components';
import { theme } from '../../../config/theme';
import { InputProps } from './Input';

type InputPropsWithIsOpen = InputProps & {
  isOpen: boolean;
}


// The styles for the label when the input is open
const openInput = css`
  transform: scale(0.75) translateY(-6rem);
`;


/**
 * Base styles for the component
 *
 * @param {InputPropsWithIsOpen} props The Input properties object
 * @returns The base styles
 */
const baseStyles = (props: InputPropsWithIsOpen) => css`
  position: relative;
  margin-top: 1.5rem;

  .Input-input {
    padding: 1rem;
    line-height: 2rem;
    border: none;
    font: inherit;
    background: none;
    border-bottom: 2px solid #fff;
    color: #fff;

    &:focus {
      outline: none;
      border-bottom: 2px solid ${theme.colours.orange};

      & + .Input-label {
        ${openInput}
      }

    }
  }

  .Input-label {
    position: absolute;
    left: 1rem;
    top: calc(50%);
    color: #000;
    transform:  translateY(-50%);
    transition: transform 0.3s ease-in-out;
    pointer-events: none;
    transform-origin: left center;
    color: #fff;

    ${props.isOpen ? openInput : ''};
  }
`;



/**
 * The Input component styles
 * 
 * @param {InputPropsWithIsOpen} props The Input properties object
 */
export const styles = (props: InputPropsWithIsOpen) => css`
  ${baseStyles(props)}
`;