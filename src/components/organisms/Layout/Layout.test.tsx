
import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout component', () => {

  test('should render the component', () => {
    const { container } = render(<Layout />);
    expect(container.firstChild).toBeDefined();
  });

});