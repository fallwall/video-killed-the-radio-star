import React from 'react';
import Filler from './Filler';

function Volume(props) {
  return (
    <div className="volume-bar">
      <Filler volume={props.volume} />
    </div>

   )
}
      
      
       
export default Volume;