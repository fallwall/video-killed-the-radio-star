import React from 'react';
import staticDisk from '../images/still_rotatingrecord.png';
import disk from '../images/rotatingrecord.gif';
import "./Spinner.css";

const movingDisk = (ev) => {
  const status = ev.target.getAttribute("src");
  if (status === `${staticDisk}`) {
    ev.target.setAttribute("src", `${disk}`);
  } else {
    ev.target.setAttribute("src", `${staticDisk}`);
  }
}


export default function Spinner() {
  return (

    <div className="spinner">
      <p>Spinner</p>
      <div className="disk">
        <img src={staticDisk} alt="Spinning record" onClick={movingDisk} />
      </div>

      <div className=".container">
      </div>

    </div>

  )
}