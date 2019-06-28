import React from 'react';
import { Route } from 'react-router-dom';
import Intro from './Intro';
import Screen from './Screen';

export default function Main() {
  return (
    <>
      <p>SOME MAIN STUFF HERE</p>
      <Route path="/" exact render={() => <Intro />} />
      <Route path="/screen" render={()=> <Screen />}/>
    </>
  )
}