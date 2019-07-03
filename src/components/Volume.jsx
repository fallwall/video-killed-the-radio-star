import React from 'react';
import Filler from './Filler';

export default function Volume(props) {
  return (
    <div className="volume-bar">
      <Filler volume={props.volume} />
    </div>
  )
}