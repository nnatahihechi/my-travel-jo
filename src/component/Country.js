import React from 'react'
import { GoLocation } from 'react-icons/go';


export default function Country({ travelData }) {

   
  return (
    <div className="countries">
      <div className="image">
          <img src={travelData.imageUrl}/>
        </div>
      
      <div className="country-name">
      
      <div className="nav">
        <GoLocation/>
          <p className="location"> 
            {travelData.location}
          </p>
          <p><a href={travelData.googleMapsUrl}></a></p>
          </div>
        
        
          <div className="mount"> 
            <h3>{travelData.title}</h3>
          </div>
          <p className="date">{travelData.date}</p>
          <h1>
            {travelData.description}
          </h1>
       
      </div>
    </div>
  )
}
