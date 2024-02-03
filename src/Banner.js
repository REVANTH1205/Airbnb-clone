import React, { useState } from 'react'
import './Banner.css'
import Button from "@mui/material/Button"
import Search from './Search'
import { useNavigate } from "react-router-dom";

function Banner() {
  // const history = useHistory();
  const navigate= useNavigate();
    const [showSearch , setShowSearch] = useState( false );

  return (
    <div className='banner'>
        <div className='banner_search'>
            {showSearch && <Search />}
            <Button onClick={()=> setShowSearch(!showSearch)}
            className='bsearchButton' 
            variant='outlined' > 
                {showSearch ? "Hide" : "Search "}

            </Button>

        </div>
      {/* <h1> helo </h1> */}
      <div className='banner_info'>
        <h1> Get out and Stretch your imagination</h1>
        <h5>Plan a differnet kind of gateway to uncover the hidden gems near you. </h5>
        <Button onClick={()=> navigate("/search")} varient='outlined'> Explore Nearby</Button>

      </div>
    </div>
  )
}

export default Banner
