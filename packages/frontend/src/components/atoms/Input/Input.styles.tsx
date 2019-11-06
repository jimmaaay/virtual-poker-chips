
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
  padding: 1.5rem 0 3rem;


  .Input-container {
    position: relative;
  }

  .Input-input {
    padding: 1rem;
    line-height: 2rem;
    border: none;
    font: inherit;
    background: #434B49;
    color: #fff;
    border-radius: 1rem;
    border: 2px solid ${props.error ? theme.colours.red : 'transparent'};

    &:focus {
      outline: none;
      border-color: ${theme.colours.orange};

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
    color: ${props.error ? theme.colours.red : '#fff'};

    ${props.isOpen ? openInput : ''};
  }

  .Input-error {
    position: absolute;
    left: 0;
    right: 0;
    color: tomato;
    margin: 0;
    top: 6.5rem;
    font-size: 1.4rem;
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