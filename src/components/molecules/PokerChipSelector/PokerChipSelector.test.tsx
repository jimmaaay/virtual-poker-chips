
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { PokerChipSelector } from './PokerChipSelector';

describe('PokerChipSelector component', () => {

  test('should render the component', () => {
    const { container } = render(
      <PokerChipSelector
        selected={[]}
        onSelected={jest.fn()}
      />
    );
    expect(container.firstChild).toBeDefined();
  });

  test('should call onSelected with only 10 chip selected', async () => {
    const onSelected = jest.fn();
    const { getByTestId } = render(
      <PokerChipSelector
        selected={[]}
        onSelected={onSelected}
      />
    );

    const pokerChip = getByTestId('PokerChip-10');

    fireEvent.click(pokerChip);

    expect(onSelected).toHaveBeenCalledTimes(1);
    expect(onSelected).toHaveBeenCalledWith([10]);
  });

});