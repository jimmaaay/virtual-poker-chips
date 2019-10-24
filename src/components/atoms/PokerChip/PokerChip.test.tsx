
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PokerChip, PokerChipValues } from './PokerChip';

describe('PokerChip component', () => {

  test('should render the component', () => {
    const { container } = render(<PokerChip chipValue={PokerChipValues.TEN} />);
    expect(container.firstChild).toBeDefined();
  });

  test('should fire the onClick handler when clicked', () => {
    const testID = 'pokerchip-test';
    const onClick = jest.fn();
    const { getByTestId } = render(
      <PokerChip chipValue={PokerChipValues.TEN} onClick={onClick} data-testid={testID}/>
    );

    const chip = getByTestId(testID);
    fireEvent.click(chip);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('should not fire the onClick handler when disabled', () => {
    const testID = 'pokerchip-test';
    const onClick = jest.fn();
    const { getByTestId } = render(
      <PokerChip
        chipValue={PokerChipValues.TEN}
        onClick={onClick}
        data-testid={testID}
        disabled
      />
    );

    const chip = getByTestId(testID);
    fireEvent.click(chip);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

});