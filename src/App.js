import React, {useState} from 'react';
import axios from 'axios';

function App() {

  // const url =`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=66fa9b97478bf2b9d156815cabfc54c0`

  return (
    <div className="App">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>60°F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>65°F</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
