import { css } from 'styled-components';
import { HeadingProps, HeadingSize } from './Heading';


/**
 * Base styles for the component
 */
const baseStyles = css`
  line-height: 1.2;
  font-weight: 300;
  margin: 0 0 2.5rem;
`;

/**
 * Gets the size specific styles for the component
 * 
 * @param {HeadingProps} props The Heading properties object
 * @returns The size specific styles
 */
const sizeStyles = (props: HeadingProps) => {
  switch (props.size) {
    case HeadingSize.H1:
      return css`
        font-size: 4rem;
      `;

    case HeadingSize.H2:
      return css`
        font-size: 3.3rem;
      `;

    case HeadingSize.H3:
      return css`
        font-size: 2.8rem;
      `;

    default:
      return css``;
  }
};



/**
 * The Heading component styles
 * 
 * @param {HeadingProps} props The Heading properties object
 */
export const styles = (props: HeadingProps) => css`
  ${baseStyles}
  ${sizeStyles(props)}
`;