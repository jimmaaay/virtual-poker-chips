import React, { PropsWithChildren, MouseEventHandler } from 'react';
import { css } from 'glamor';

// FDB215
// DF818F
// 545766

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  theme?: 'primary' | 'delete';
}

const rules = css({
  fontSize: '1.6rem',
  fontWeight: 'normal',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  padding: '1rem 2rem',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'background 0.2s ease-in-out',
});

const themes = {
  primary: {
    background: 'hsl(41, 98%, 54%)',
    color: '#fff',
    ':hover': {
      background: 'hsl(41, 98%, 46%)'
    },
  },
  delete: {
    color: '#fff',
    background: 'hsl(351, 59%, 69%)',
    ':hover': {
      background: 'hsl(351, 59%, 60%)',
    }
  }
};

const Button = (props: PropsWithChildren<ButtonProps>) => {

  const {
    theme = 'primary',
    onClick = false,
  } = props;

  const buttonProps: any = {};

  if (onClick !== false) {
    buttonProps.onClick = onClick;
  }

  const themeStyles = themes[theme];

  return (
    <button
      { ...css(rules, themeStyles) }
      { ...buttonProps }
    >
      { props.children }
    </button>
  );
};

export default Button;