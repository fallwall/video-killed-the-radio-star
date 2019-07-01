import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import video80 from '../data/video80.json';
import video90 from '../data/video90.json';
import video00 from '../data/video00.json';
import video10 from '../data/video10.json';
import bonustrack from '../data/bonustrack.json';
import heart from '../images/heart.png';
import './Nav.css';



function Nav() {

  return (
    <>
      <nav>
        <Link to="/" >Home</Link>
        <Link id="video80"
          to={{
            pathname: '/screen2',
            state: {
              list: { video80 }

            }
          }}
          onMouseOver={(ev) => { ev.target.parentElement.previousSibling.classList.add("glitch80s") }}
          onMouseOut={(ev) => { ev.target.parentElement.previousSibling.classList.remove("glitch80s") }}
        >
          80s</Link>
        <Link id="video90"
          to={{
            pathname: '/screen2',
            state: {
              list: { video90 }
            }
          }}
          onMouseOver={(ev) => { ev.target.parentElement.previousSibling.classList.add("glitch90s") }}
          onMouseOut={(ev) => { ev.target.parentElement.previousSibling.classList.remove("glitch90s") }}
        >
          90s</Link>
        <Link id="video00"
          to={{
            pathname: '/screen2',
            state: {
              list: { video00 }
            }
          }}
          onMouseOver={(ev) => { ev.target.parentElement.previousSibling.classList.add("glitch00s") }}
          onMouseOut={(ev) => { ev.target.parentElement.previousSibling.classList.remove("glitch00s") }}
        >
          00s</Link>
        <Link id="video10"
          to={{
            pathname: '/screen2',
            state: {
              list: { video10 }
            }
          }}
          onMouseOver={(ev) => { ev.target.parentElement.previousSibling.classList.add("glitch10s") }}
          onMouseOut={(ev) => { ev.target.parentElement.previousSibling.classList.remove("glitch10s") }}
        >
          10s</Link>
        <Link
          to={{
            pathname: '/screen2',
            state: {
              list: { bonustrack }
            }
          }}
        > <img src={heart} alt="Bonus Track" /></Link>
      </nav>
    </>
  )
}

export default withRouter(Nav);