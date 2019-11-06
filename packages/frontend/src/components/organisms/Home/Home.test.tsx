
import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Home component', () => {

  test('should render the component', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toBeDefined();
  });

});