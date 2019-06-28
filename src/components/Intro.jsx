import React from 'react';
import Search from './Search';
import Spinner from './Spinner';
import "./Intro.css";

export default function Intro() {
  return (
    <>
      <div className="intro">
      <p>INTRO PAGE HERE</p>
      
        <Search />
        <Spinner />
       
      </div>
     
    </>
  )
}