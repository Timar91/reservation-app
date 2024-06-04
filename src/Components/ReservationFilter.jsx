import React from 'react';

const ReservationFilter = ({ onFilter }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onFilter({ [name]: value });
  };

  return (
    <div className='selectWrapper'>
      <label className='filterWrapper'>
        <p className='filterName'>Status:</p>
        <select name="status" onChange={handleChange}>
          <option value="">All Status</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="SEATED">Seated</option>
          <option value="CHECKED OUT">Checked Out</option>
          <option value="NOT CONFIRMED">Not Confirmed</option>
        </select>
      </label>
      <label className='filterWrapper'>
        <p className='filterName'>Shift:</p>
        <select name="shift" onChange={handleChange}>
          <option value="">All Shifts</option>
          <option value="BREAKFAST">Breakfast</option>
          <option value="LUNCH">Lunch</option>
          <option value="DINNER">Dinner</option>
        </select>
      </label>
      <label className='filterWrapper'>
        <p className='filterName'>Area:</p>
        <select name="area" onChange={handleChange}>
          <option value="">All Areas</option>
          <option value="BAR">Bar</option>
          <option value="MAIN ROOM">Main Room</option>
        </select>
      </label>
      <label className='filterWrapper'>
        <p className='filterName'>Date:</p>
        <input type="date" name="date" onChange={handleChange} />
      </label>
    </div>
  );
};

export default ReservationFilter;