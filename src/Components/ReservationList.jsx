import React, { useState, useEffect } from 'react';
import ReservationFilter from './ReservationFilter';
import ReservationSorter from './ReservationSorter';
import ReservationSearch from './ReservationSearch';
import './styles.scss';
 

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSort, setActiveSort] = useState('');

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/dhwissem/5e7c48768af1eb721d9e2e1d874cd9a0/raw/serverResponse.json')
      .then(response => response.json())
      .then(data => {
        setReservations(data.reservations);
        setFilteredReservations(data.reservations);
      });
  }, []);


  useEffect(() => {
    const applyFilters = () => {
      let filtered = reservations;
  
      if (filters.status) {
        filtered = filtered.filter(reservation => reservation.status === filters.status);
      }
  
      if (filters.shift) {
        filtered = filtered.filter(reservation => reservation.shift === filters.shift);
      }
  
      if (filters.area) {
        filtered = filtered.filter(reservation => reservation.area === filters.area);
      }
  
      if (filters.date) {
        filtered = filtered.filter(reservation => reservation.businessDate === filters.date);
      }
  
      if (searchQuery) {
        filtered = filtered.filter(reservation => 
          reservation.customer.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          reservation.customer.lastName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
  
      setFilteredReservations(filtered);
    };
    applyFilters();
  }, [filters, searchQuery, reservations]);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const handleSort = (sortField) => {
    if (activeSort === sortField) {
      setActiveSort('');
      setFilteredReservations([...reservations]);
      return;
    }
    
    const sorted = [...filteredReservations].sort((a, b) => {
      const aValue = sortField.split('.').reduce((obj, key) => obj[key], a);
      const bValue = sortField.split('.').reduce((obj, key) => obj[key], b);

      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });

    setFilteredReservations(sorted);
    setActiveSort(sortField);
  };


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className='mainWrapper'>
      <div className='introWrapper'>
        <h2 className='introTitle'>first Senario:</h2>
        <p className='introTxt'>User filters by date / status / shift / area </p>
      </div>
      <ReservationFilter onFilter={handleFilterChange} />
      <div className='introWrapper'>
        <h2 className='introTitle'>second Senario:</h2>
        <p className='introTxt'>List of reservations is updated based on the sorting applied</p>
      </div>
      <ReservationSorter onSort={handleSort}  activeSort={activeSort} />
      <div className='introWrapper'>
        <h2 className='introTitle'>third senario:</h2>
        <p className='introTxt'>User searches by name and surname of the reservation</p>
      </div>
      <ReservationSearch onSearch={handleSearch} />
      {filteredReservations.length === 0 ? (
        <p className="no-results">No results found</p>
      ) : (
      <table className='tableWrapper'>
        <thead className='tableHead'>
          <tr className='tableHeadTitle' role="row">
            <th className='HeadItem'>First Name</th>
            <th className='HeadItem'>Last Name</th>
            <th className='HeadItem'>Date</th>
            <th className='HeadItem'>Status</th>
            <th className='HeadItem'>Shift</th>
            <th className='HeadItem'>Area</th>
            <th className='HeadItem'>Guest Notes</th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {filteredReservations.map(reservation => (
            <tr key={reservation.id} className='tableBodyContent'>
              <td className='tableItem'>{reservation.customer.firstName}</td>
              <td className='tableItem'>{reservation.customer.lastName}</td>
              <td className='tableItem'>{reservation.businessDate}</td>
              <td className='tableItem'>{reservation.status}</td>
              <td className='tableItem'>{reservation.shift}</td>
              <td className='tableItem'>{reservation.area}</td>
              <td className='tableItem'>{reservation.guestNotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      </div>
    );
  };
export default ReservationList;