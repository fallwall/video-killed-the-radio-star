import React from 'react';
import Spinner from './Spinner';


export default function Intro(props) {
  return (
    <>
      <Spinner handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
    </>
  )
}