
import React from 'react';
import { render } from '@testing-library/react';
import { TableView } from './TableView';

describe('TableView component', () => {

  test('should render the component', () => {
    const { container } = render(<TableView />);
    expect(container.firstChild).toBeDefined();
  });

});