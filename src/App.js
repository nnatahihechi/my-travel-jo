import React from 'react'
import './App.css';
import Navbar from './component/Navbar'
import Country from "./component/Country";
import data from './data'
function App() {
  return (
    <div className="App">
      <div className="App-country">
      <Navbar/>
     
      {
        data.map((data, index) => (
          <Country travelData={data} key={index}/>
        ))
      }
    
      </div>
    </div>
   
  );
}

export default App;
