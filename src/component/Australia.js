import React from 'react'
import image from '../images/Australia.jpeg'
import { GoLocation } from 'react-icons/go';


function Australia() {
  return (
<div className="countries">
      <div className="image">
          <img src={image}/>
        </div>
      
      <div className="country-name">
      
      <div className="nav">
        <GoLocation/>
          <p className="j"> 
            Japan
          </p>
          <p>View on Google Maps</p>
          </div>
        
        
          <div className="mount"> 
            <h3>Mount Fuji</h3>
          </div>
          <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
          <h1>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.

          </h1>
       
      </div>
    </div>
  )
}

export default Australia