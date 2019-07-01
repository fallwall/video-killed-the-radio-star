import React from 'react';
import Nav from './Nav';
import './Header.css';


export default class Header extends React.Component {

  render() {
    return (
      <>
        <header>
          <h1>Video Killed the Radio Star</h1>
          <Nav />
        </header>
      </>
    )
  }
}