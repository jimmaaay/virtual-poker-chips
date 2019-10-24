---
to: src/components/<%= h.getComponentDirectory(type) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.styles.tsx
---

import { css } from 'styled-components';
import { <%= h.changeCase.pascal(name) %>Props } from './<%= h.changeCase.pascal(name) %>';

/**
 * Base styles for the component
 *
 * @param {<%= h.changeCase.pascal(name) %>Props} props The <%= h.changeCase.pascal(name) %> properties object
 * @returns The base styles
 */
const baseStyles = (props: <%= h.changeCase.pascal(name) %>Props) => css``;



/**
 * The <%= h.changeCase.pascal(name) %> component styles
 * 
 * @param {<%= h.changeCase.pascal(name) %>Props} props The <%= h.changeCase.pascal(name) %> properties object
 */
export const styles = (props: <%= h.changeCase.pascal(name) %>Props) => css`
  ${baseStyles(props)}
`;