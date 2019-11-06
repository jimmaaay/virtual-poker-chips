
import { css } from 'styled-components';
import { HomeProps } from './Home';

/**
 * Base styles for the component
 *
 * @param {HomeProps} props The Home properties object
 * @returns The base styles
 */
const baseStyles = (props: HomeProps) => css`

  .buttons {
    display: flex;
    flex-direction: column;
  }

  .start-button {
    margin-bottom: 2.4rem;
  }

`;



/**
 * The Home component styles
 * 
 * @param {HomeProps} props The Home properties object
 */
export const styles = (props: HomeProps) => css`
  ${baseStyles(props)}
`;