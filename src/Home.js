import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card'

function Home() {
  return (
    <div className='home'>
      {/* <h1> home component</h1> */}
      <Banner />

      <div className='home_section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="1 Bedroom Oasis in Mumbai"
                description="Description: Discover serenity in the bustling city of Mumbai with our 1-bedroom oasis."
                price="$130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse Elegance in Delhi"
                description="Enjoy the amazing sights of Delhi with this stunning penthouse"
                price="$300/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom Haven in Jaipur"
                description="Soak in the breathtaking city views from our penthouse in Jaipur. "
                price="$170/night"
            />
            </div>
           
            <div className='home_section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Retreat in Goa"
                description="Find tranquility in our 1-bedroom retreat in the vibrant state of Goa."
                price="$190/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Penthouse Splendor in Kolkata"
                description="Immerse yourself in the grandeur of our penthouse in Kolkata."
                price="$150/night"
            />
            </div>
            <div className='home_section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="1 Bedroom Hideaway in Udaipur"
                description=" Experience the charm of Udaipur in our 1-bedroom hideaway."
                price="$200/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in Chennai"
                description="Elevate your stay with our penthouse paradise in Chennai."
                price="$350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom Charm in Agra"
                description="Immerse yourself in the historic charm of Agra in our 1-bedroom apartment"
                price="$70/night"
            />
            </div>

            
    </div>
  )
}

export default Home
