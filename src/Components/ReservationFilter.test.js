import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReservationFilter from './ReservationFilter';

describe('ReservationFilter Component', () => {
  test('it should call onFilter with correct status value', () => {
    const onFilterMock = jest.fn();
    render(<ReservationFilter onFilter={onFilterMock} />);

    fireEvent.change(screen.getByLabelText('Status:'), { target: { value: 'CONFIRMED' } });
    expect(onFilterMock).toHaveBeenCalledWith({ status: 'CONFIRMED' });
  });

  test('it should call onFilter with correct shift value', () => {
    const onFilterMock = jest.fn();
    render(<ReservationFilter onFilter={onFilterMock} />);

    fireEvent.change(screen.getByLabelText('Shift:'), { target: { value: 'BREAKFAST' } });
    expect(onFilterMock).toHaveBeenCalledWith({ shift: 'BREAKFAST' });
  });

  test('it should call onFilter with correct area value', () => {
    const onFilterMock = jest.fn();
    render(<ReservationFilter onFilter={onFilterMock} />);

    fireEvent.change(screen.getByLabelText('Area:'), { target: { value: 'BAR' } });
    expect(onFilterMock).toHaveBeenCalledWith({ area: 'BAR' });
  });

  test('it should call onFilter with correct date value', () => {
    const onFilterMock = jest.fn();
    render(<ReservationFilter onFilter={onFilterMock} />);

    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-05-27' } });
    expect(onFilterMock).toHaveBeenCalledWith({ date: '2023-05-27' });
  });
});
