
import React from 'react';
import { render } from '@testing-library/react';
import { Setup } from './Setup';

describe('Setup component', () => {

  test('should render the component', () => {
    const { container } = render(<Setup />);
    expect(container.firstChild).toBeDefined();
  });

});