import React from 'react';

const ReservationSorter = ({ onSort, activeSort }) => {

  return (
    <div className='btnWrapper'>
      <button
        className={`button ${activeSort === 'customer.firstName' ? 'active' : ''}`}
        onClick={() => onSort('customer.firstName')}>Sort by First Name</button>
      <button
       className={`button ${activeSort === 'customer.lastName' ? 'active' : ''}`}
       onClick={() => onSort('customer.lastName')}>Sort by Last Name</button>
      <button
        className={`button ${activeSort === 'quantity' ? 'active' : ''}`}
        onClick={() => onSort('quantity')}>Sort by Guest Number</button>
    </div>
  );
};

export default ReservationSorter;