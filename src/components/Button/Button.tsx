import React, { PropsWithChildren, MouseEventHandler } from 'react';
import styled from 'styled-components';

// FDB215
// DF818F
// 545766

interface ButtonProps {
  /**
   * A function that will be called when clicked
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * The colour theme to be applied to the button
   */
  theme?: 'primary' | 'delete';
}


const themes: any = {
  primary: {
    background: 'hsl(41, 98%, 54%)',
    hoverBackground: 'hsl(41, 98%, 46%)'
  },
  delete: {
    background: 'hsl(351, 59%, 69%)',
    hoverBackground: 'hsl(351, 59%, 60%)',
  },
};

const StyledButton = styled.button`
  font-size: 1.6rem;
  font-weight: normal;
  font-family: inherit;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.2s ease-in-out;
  color: #fff;
  background: ${props => themes[props.theme].background};

  :hover {
    background: ${props => themes[props.theme].hoverBackground};
  }
`;


const Button = (props: PropsWithChildren<ButtonProps>) => {

  const {
    theme = 'primary',
    onClick = false,
  } = props;

  const buttonProps: any = {};

  if (onClick !== false) {
    buttonProps.onClick = onClick;
  }

  return (
    <StyledButton
      theme={theme}
      { ...buttonProps }
    >
      { props.children }
    </StyledButton>
  );
};

export default Button;