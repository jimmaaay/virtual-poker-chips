
import { css } from 'styled-components';
import { LayoutProps } from './Layout';

/**
 * Base styles for the component
 *
 * @param {LayoutProps} props The Layout properties object
 * @returns The base styles
 */
const baseStyles = (props: LayoutProps) => css`

  .header {
    padding: 1rem 0;
  }

  .wrapper {
    padding: 0 2rem;
  }

  .title {
    margin: 0;
  }

  .main {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;



/**
 * The Layout component styles
 * 
 * @param {LayoutProps} props The Layout properties object
 */
export const styles = (props: LayoutProps) => css`
  ${baseStyles(props)}
`;