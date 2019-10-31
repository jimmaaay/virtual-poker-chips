
import React from 'react';
import { render } from '@testing-library/react';
import { PokerChipHand } from './PokerChipHand';

describe('PokerChipHand component', () => {

  test('should render the component', () => {
    const { container } = render(<PokerChipHand />);
    expect(container.firstChild).toBeDefined();
  });

});