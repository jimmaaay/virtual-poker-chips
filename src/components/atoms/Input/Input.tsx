import React, { ChangeEvent, FocusEvent } from 'react';
import styled from 'styled-components';
import { styles } from './Input.styles';

const StyledInput = styled.div`
  ${styles}
`;

export interface InputProps {
  /**
   * The inputs label
   */
  label: string;

  /**
   * The type of input
   */
  type: 'text' | 'email';

  /**
   * The id to assign to the label
   */
  id: string;

  /**
   * The inputs value
   */
  value: string;

  /**
   * The name of the input
   */
  name?: string;

  /**
   * Value of the autocomplete attribute
   */
  autocomplete?: string;

  /**
   * The error message to show
   */ 
  error?: string;

  /**
   * If the input is disabled
   */
  disabled?: boolean;

  /**
   * A function called when the input changes
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * A function called on blur of the input
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * The class to add to the component
   */
  className?: string;

  /**
   * The data-testid to add to the component
   */
  'data-testid'?: string;
}


export const Input = (props: InputProps) => {
  const {
    id,
    label,
    value,
    type,
    disabled,
    autocomplete,
    name,
    error,
    onChange = () => {},
    ...rest
  } = props;

  const isOpen = value.trim() !== '';

  return (
    <StyledInput
      label={label}
      type={type}
      id={id}
      value={value}
      isOpen={isOpen}
      error={error}
      {...rest}
    >
      <div className="Input-container">
        <input
          type={type}
          onChange={onChange}
          disabled={disabled}
          autoComplete={autocomplete}
          name={name}
          id={id}
          value={value}
          className="Input-input"
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <label htmlFor={id} className="Input-label">{label}</label>
      </div>
      { error && (
        <p className="Input-error" id={`${id}-error`}>{ error }</p>
      )}
    </StyledInput>
  );
};



