import React from 'react';

import disk from '../images/rotatingrecord.gif';
import "./Spinner.css";



export default function Spinner() {
  return (
  
      <div className="spinner">
      <p>Spinner</p>
          <div className="disk">
          <img src={disk} alt="Spinning record" />
          </div>

        <div className=".container">
        </div>

      </div>
   
  )
}