import React from 'react';
import Search from './Search';
import Prompt from './Prompt';
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


export default function Spinner(props) {
  return (

    <div className="spinner">
      <div className="spinner-container">
        <Prompt />
        <Search handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
        <div className="disk">
          <img src={staticDisk} alt="Spinning record" onClick={movingDisk} />
        </div>


      </div>

    </div>

  )
}