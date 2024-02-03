// Search.js
import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import Button from '@mui/material/Button';
import PeopleIcon from '@mui/icons-material/Person2';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Search() {
  // const history = useHistory();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
       NUMBER OF GUEST
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />

      <h3 ><h3>
        PLACE :</h3>  
        <input
          
          type="text"
          placeholder="Enter the  place"
        />
      </h3>

      <h4><h2> 
        PRICE :</h2>
        <input 
      
          type="number"
          placeholder="Enter the  Price"
        />
      </h4>
      <Button onClick={() => navigate("/search")}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
