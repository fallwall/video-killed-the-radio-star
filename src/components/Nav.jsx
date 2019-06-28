import React from 'react';
import { Link } from 'react-router-dom';
import heart from '../images/heart.png';

export default function Nav() {
  return (
    <>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/screen/80svideo">80s</Link>
        <Link to="/screen/90svideo">90s</Link>
        <Link to="/screen/00svideo">00s</Link>
        <Link to="/screen/10svideo">10s</Link>
        <Link to="/screen/bonustrack"> <img src={heart} alt="Bonus Track" /></Link>
      </nav>
    </>
  )
}