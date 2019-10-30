
import { css } from 'styled-components';
import { SetupProps } from './Setup';

/**
 * Base styles for the component
 *
 * @param {SetupProps} props The Setup properties object
 * @returns The base styles
 */
const baseStyles = (props: SetupProps) => css`
  .button-container {
    text-align: center;
    margin-top: 3rem;
  }
`;



/**
 * The Setup component styles
 * 
 * @param {SetupProps} props The Setup properties object
 */
export const styles = (props: SetupProps) => css`
  ${baseStyles(props)}
`;