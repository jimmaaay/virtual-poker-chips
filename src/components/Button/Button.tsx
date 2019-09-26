import React, { PropsWithChildren, MouseEventHandler } from 'react';
import styled, { keyframes } from 'styled-components';

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
  /**
   * If the button is disabled
   */
  disabled?: boolean;
  /**
   * If the button is loading
   */
  loading?: boolean;
}

interface StyledButtonProps {
  loading: boolean;
  theme: string;
  disabled: boolean;
}

interface ButtonTextProps {
  loading: boolean;
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

const StyledButton = styled.button<StyledButtonProps>`
  font-size: 1.6rem;
  font-weight: normal;
  font-family: inherit;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.2s ease-in-out;
  color: #fff;
  position: relative;
  background: ${props => props.disabled ? '#dcdcdc' : themes[props.theme].background};

  ${props => props.disabled || props.loading ? 'pointer-events: none': ''};

  :hover {
    background: ${props => themes[props.theme].hoverBackground};
  }
`;

const ButtonText = styled.span<ButtonTextProps>`
  visibility: ${props => props.loading ? 'hidden' : 'visible'};
`;

const spinnerAnimation = keyframes`
  from {
    transform: none
  }

  to {
    transform: rotate(360deg);
  }
`;


const ButtonLoader = styled.div`
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
`;


const Button = (props: PropsWithChildren<ButtonProps>) => {

  const {
    theme = 'primary',
    onClick = false,
    disabled = false,
    loading = false,
  } = props;

  const buttonProps: any = {};

  if (onClick !== false) {
    buttonProps.onClick = onClick;
  }

  const loader = loading ? <ButtonLoader /> : false;

  return (
    <StyledButton
      theme={theme}
      disabled={disabled}
      loading={loading}
      { ...buttonProps }
    >
      <ButtonText loading={loading}>{ props.children }</ButtonText>
      { loader }
    </StyledButton>
  );
};

export default Button;