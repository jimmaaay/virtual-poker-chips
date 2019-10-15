import React, { PropsWithChildren, MouseEvent } from 'react';
import styled from 'styled-components';
import { styles } from './Button.styles';

export enum ButtonTheme {
  PRIMARY = 'primary',
  DELETE = 'delete',
}

export interface ButtonProps {
  /**
   * The colour theme to be applied to the button
   * 
   * 1. PRIMARY
   * 2. DELETE
   * 
   * @default PRIMARY
   */
  theme?: ButtonTheme;

  /**
   * If the button is disabled
   */
  disabled?: boolean;

  /**
   * If the button is loading
   */
  loading?: boolean;

  /**
   * A function that will be called when clicked
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * The class to add to the component
   */
  className?: string;

  /**
   * The data-testid to add to the component
   */
  'data-testid'?: string;
}


const StyledButton = styled.button`
  ${styles}
`;


export const Button = (props: PropsWithChildren<ButtonProps>) => {

  const {
    theme = ButtonTheme.PRIMARY,
    disabled = false,
    loading = false,
    onClick,
    ...otherProps
  } = props;

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    onClick != null && !loading && onClick(e);
  };

  return (
    <StyledButton
      theme={theme}
      disabled={disabled}
      loading={loading}
      onClick={onClickHandler}
      { ...otherProps }
    >
      <span className="Button-text">{ props.children }</span>
      { loading && <div className="Button-loader" data-testid="Button-loader" /> }
    </StyledButton>
  );
};