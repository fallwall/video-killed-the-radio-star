import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import heart from '../images/heart.png';
import './Header.css';

function Nav() {
  return (
    <>
      <nav>
        <Link to="/" >Home</Link>
        <Link id="video80"
          to='/screen/video80'
          onMouseOver={(ev) => { ev.target.parentElement.previousSibling.classList.add("glitch80s") }}
          onMouseOut={(ev) => { ev.target.parentElement.previousSibling.classList.remove("glitch80s") }}
        >
          80s</Link>
        <Link id="video90"
          to='/screen/video90'
          onMouseOver={(ev) => { ev.target.parentElement.previousSibling.classList.add("glitch90s") }}
          onMouseOut={(ev) => { ev.target.parentElement.previousSibling.classList.remove("glitch90s") }}
        >
          90s</Link>
        <Link id="video00"
          to='/screen/video00'
          onMouseOver={(ev) => { ev.target.parentElement.previousSibling.classList.add("glitch00s") }}
          onMouseOut={(ev) => { ev.target.parentElement.previousSibling.classList.remove("glitch00s") }}
        >
          00s</Link>
        <Link id="video10"
          to='/screen/video10'
          onMouseOver={(ev) => { ev.target.parentElement.previousSibling.classList.add("glitch10s") }}
          onMouseOut={(ev) => { ev.target.parentElement.previousSibling.classList.remove("glitch10s") }}
        >
          10s</Link>
        <Link
          to='/screen/bonustrack'
        > <img src={heart} alt="Bonus Track" /></Link>
      </nav>
    </>
  )
}

export default withRouter(Nav);