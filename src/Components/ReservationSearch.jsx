import React, { useState } from 'react';

const ReservationSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <>
      <input 
        type="text" 
        value={query}
        onChange={handleChange}
        placeholder="Search by Name or Surname"
      />
    </>
  );
};

export default ReservationSearch;