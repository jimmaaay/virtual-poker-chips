
import React from 'react';
import { render } from '@testing-library/react';
import { PokerChipSelector } from './PokerChipSelector';

describe('PokerChipSelector component', () => {

  test('should render the component', () => {
    const { container } = render(<PokerChipSelector />);
    expect(container.firstChild).toBeDefined();
  });

});