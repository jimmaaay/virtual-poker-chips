
import { css } from 'styled-components';
import { TableViewProps } from './TableView';

/**
 * Base styles for the component
 *
 * @param {TableViewProps} props The TableView properties object
 * @returns The base styles
 */
const baseStyles = (props: TableViewProps) => css``;



/**
 * The TableView component styles
 * 
 * @param {TableViewProps} props The TableView properties object
 */
export const styles = (props: TableViewProps) => css`
  ${baseStyles(props)}
`;