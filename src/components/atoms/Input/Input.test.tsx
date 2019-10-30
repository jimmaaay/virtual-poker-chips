
import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {

  test('should render the component', () => {
    const { container } = render(
      <Input
        value=""
        id="example"
        type="text"
        label="Example"
      />
    );
    expect(container.firstChild).toBeDefined();
  });

  test('should show an error message when error is a string', () => {
    const error = 'Ahh something went wrong!';
    const { queryByText } = render(
      <Input
        value=""
        id="example"
        type="text"
        label="Example"
        error={error}
      />
    );
    expect(queryByText(error)).not.toBeNull();
  });

});