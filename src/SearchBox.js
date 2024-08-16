import React, { useState } from 'react';
import { Search } from 'lucide-react';
import scheduleData from './scheduleData';  // Make sure this path is correct

const SearchBox = () => {
  const [searchTime, setSearchTime] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debugInfo, setDebugInfo] = useState('');

  const handleSearchChange = (e) => {
    setSearchTime(e.target.value);
  };

  const handleSearch = () => {
    if (!searchTime) return;

    const [hours, minutes] = searchTime.split(':').map(Number);
    const searchMinutes = hours * 60 + minutes;

    console.log('Search time:', searchTime);
    console.log('Search minutes:', searchMinutes);
    console.log('Schedule data:', scheduleData);

    const results = scheduleData
      .filter(row => {
        const [returnHours, returnMinutes] = row.EGHQ_Return.split(':').map(Number);
        const returnTotalMinutes = returnHours * 60 + returnMinutes;
        console.log(`Comparing ${returnTotalMinutes} >= ${searchMinutes}`);
        return returnTotalMinutes >= searchMinutes;
      })
      .slice(0, 2)
      .map(row => ({
        departureTecom1: row.TECOM1,
        arrivalEGHQ: row.EGHQ_Return
      }));

    console.log('Search results:', results);

    setSearchResults(results);
    setDebugInfo(`Searched for: ${searchTime}, Found: ${results.length} results`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ backgroundColor: '#F5EDED', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', color: '#6482AD' }}>
        <Search style={{ marginRight: '0.5rem' }} />
        <span>Search Arrival Time</span>
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <input
          type="time"
          value={searchTime}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          style={{ marginRight: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #6482AD' }}
        />
        <button 
          onClick={handleSearch}
          style={{ 
            backgroundColor: '#6482AD', 
            color: '#F5EDED', 
            padding: '0.5rem 1rem', 
            borderRadius: '0.25rem', 
            border: 'none', 
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>
      {searchResults.length > 0 ? (
        <div>
          <p style={{ fontWeight: '600', color: '#6482AD', marginTop: '0.5rem' }}>Next available buses:</p>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} style={{ color: '#7FA1C3', marginBottom: '0.25rem' }}>
                Depart Tecom-1: <strong>{result.departureTecom1}</strong> | Arrive EGHQ: <strong>{result.arrivalEGHQ}</strong>
              </li>
            ))}
          </ul>
        </div>
      ) : searchTime ? (
        <p style={{ color: '#6482AD', marginTop: '0.5rem' }}>No buses found after the specified time.</p>
      ) : null}
      <p style={{ color: '#6482AD', marginTop: '0.5rem', fontSize: '0.8rem' }}>{debugInfo}</p>
    </div>
  );
};

export default SearchBox;