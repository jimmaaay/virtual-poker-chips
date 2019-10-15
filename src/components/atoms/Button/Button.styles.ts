import { css, keyframes } from 'styled-components';
import { darken } from 'polished';
import { theme } from '../../../config/theme';
import { ButtonProps, ButtonTheme } from './Button';

const spinnerAnimation = keyframes`
  from {
    transform: none
  }

  to {
    transform: rotate(360deg);
  }
`;

/**
 * Base styles for the component
 *
 * @param {ButtonProps} props The Button properties object
 * @returns The base styles
 */
const baseStyles = (props: ButtonProps) => css`
  font-size: 1.6rem;
  font-weight: normal;
  font-family: inherit;
  padding: 1rem 2rem;
  border: none;
  cursor: ${props.loading ? 'default' : 'pointer'};
  border-radius: 5px;
  transition: background 0.2s ease-in-out;
  color: #fff;
  position: relative;

  &[disabled] {
    background: ${theme.colours.grey};
    cursor: default;
  }

  .Button-text {
    opacity: ${props.loading ? 0 : 1};
  }

  .Button-loader {
    --diameter: 3rem;
    width: var(--diameter);
    height: var(--diameter);
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
    border-left: 0.5rem solid #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: calc(var(--diameter) / -2);
    margin-top:  calc(var(--diameter) / -2);
    border-radius: 50%;
    animation: ${spinnerAnimation} 1s infinite linear;
  }
`;

/**
 * The theme specific styles for the component
 *
 * @param {ButtonProps} props The Button properties object
 * @returns The theme specific styles
 */
const themeStyles = (props: ButtonProps) => {
  switch (props.theme) {

    case ButtonTheme.DELETE:
      return css`
        background: ${theme.colours.red};

        &:hover,
        &:focus {
          background: ${darken(0.1, theme.colours.red)};
        }
      `;

    case ButtonTheme.PRIMARY:
    default:
      return css`
        background: ${theme.colours.orange};

        &:hover,
        &:focus {
          background: ${darken(0.1, theme.colours.orange)};
        }
      `;

  }
};





/**
 * The Button component styles
 * 
 * @param {ButtonProps} props The Button properties object
 */
export const styles = (props: ButtonProps) => css`
  ${baseStyles(props)}
  ${themeStyles(props)}
`;