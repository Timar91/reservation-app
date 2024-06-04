import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ReservationSorter from './ReservationSorter';

describe('ReservationSorter Component', () => {
  test('it should call onSort with correct arguments and applies active class', () => {
    const onSortMock = jest.fn();
    const { rerender } = render(<ReservationSorter onSort={onSortMock} activeSort="" />);

    const firstNameButton = screen.getByText('Sort by First Name');
    const lastNameButton = screen.getByText('Sort by Last Name');
    const guestNumberButton = screen.getByText('Sort by Guest Number');

    expect(firstNameButton).not.toHaveClass('active');
    expect(lastNameButton).not.toHaveClass('active');
    expect(guestNumberButton).not.toHaveClass('active');

    userEvent.click(firstNameButton);
    expect(onSortMock).toHaveBeenCalledWith('customer.firstName');
    rerender(<ReservationSorter onSort={onSortMock} activeSort="customer.firstName" />);
    expect(firstNameButton).toHaveClass('active');
    expect(lastNameButton).not.toHaveClass('active');
    expect(guestNumberButton).not.toHaveClass('active');

    userEvent.click(lastNameButton);
    expect(onSortMock).toHaveBeenCalledWith('customer.lastName');
    rerender(<ReservationSorter onSort={onSortMock} activeSort="customer.lastName" />);
    expect(firstNameButton).not.toHaveClass('active');
    expect(lastNameButton).toHaveClass('active');
    expect(guestNumberButton).not.toHaveClass('active');

    userEvent.click(guestNumberButton);
    expect(onSortMock).toHaveBeenCalledWith('quantity');
    rerender(<ReservationSorter onSort={onSortMock} activeSort="quantity" />);
    expect(firstNameButton).not.toHaveClass('active');
    expect(lastNameButton).not.toHaveClass('active');
    expect(guestNumberButton).toHaveClass('active');
  });
});
