import React from 'react';
import Search from './Search';
import Spinner from './Spinner';


export default function Intro(props) {
  return (
    <>
      <Search handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
      <Spinner />
    </>
  )
}