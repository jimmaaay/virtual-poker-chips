
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

});