import React, { PropsWithChildren, MouseEventHandler } from 'react';
import { css } from 'glamor';

// FDB215
// DF818F
// 545766

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const rule = css({
  fontSize: '1.6rem',
  fontWeight: 'normal',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol',

  background: 
});

const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      { ...rule }
      onClick={props.onClick}
    >
      { props.children }
    </button>
  );
};

export default Button;