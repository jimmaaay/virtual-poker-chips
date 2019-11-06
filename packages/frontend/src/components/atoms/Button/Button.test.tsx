import React from 'react';
import { Button } from './Button';
import { render, fireEvent } from '@testing-library/react';

describe('Button component', () => {
  
  test('should render the text provided', () => {
    const text = 'Hello World';
    const { queryByText } = render(<Button>{text}</Button>);

    expect(queryByText(text)).not.toBeNull();
  });

  test('should fire onClick handler when clicked', () => {
    const onClick = jest.fn();
    const testId = 'test-button';
    const { queryByTestId } = render(
      <Button onClick={onClick} data-testid={testId}>Button</Button>
    );

    const button = queryByTestId(testId);
    if (button != null) {
      fireEvent.click(button);
    }

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('should show a loader when loading is set to true', () => {
    const text = 'Hello World';
    const { queryByTestId } = render(<Button loading>{text}</Button>);

    expect(queryByTestId('Button-loader')).not.toBeNull();
  });

  test.each([['disabled'], ['loading']])(
    'should not fire onClick handler when %s',
    (prop) => {
      const onClick = jest.fn();
      const testId = 'test-button';
      const buttonProps = {
        onClick,
        [prop]: true,
        'data-testid': testId,
      };

      const { queryByTestId } = render(
        <Button {...buttonProps}>Button</Button>
      );

      const button = queryByTestId(testId);
      if (button != null) {
        fireEvent.click(button);
      }

      expect(onClick).toHaveBeenCalledTimes(0);
    },
  );

});