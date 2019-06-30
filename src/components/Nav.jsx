import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import video80 from '../data/video80.json';
import video90 from '../data/video90.json';
import video00 from '../data/video00.json';
import video10 from '../data/video10.json';
import bonustrack from '../data/bonustrack.json';
import heart from '../images/heart.png';

function Nav() {
  return (
    <>
      <nav>
        <Link to="/" >Home</Link>
        <Link to={{
          pathname: '/screen2',
          state: {
            list: { video80 }
          }
        }}
          refresh="true">
        80s</Link>
        <Link to={{
          pathname: '/screen2',
          state: {
            list: { video90 }
          }
        }} 
          refresh="true"
        >90s</Link>
        <Link to={{
          pathname: '/screen2',
          state: {
            list: { video00 }
          }
        }}
          refresh="true">00s</Link>
        <Link to={{
          pathname: '/screen2',
          state: {
            list: { video10 }
          }
        }}
           refresh="true"
        >10s</Link>
        <Link to={{
          pathname: '/screen2',
          state: {
            list: { bonustrack }
          }
        }} 
        refresh="true"> <img src={heart} alt="Bonus Track" /></Link>
      </nav>
    </>
  )
}

export default withRouter(Nav);