import React from 'react';
import Iframe from 'react-iframe';
import { searchVideo } from '../services/api'
import './Screen.css';


export default class Screen extends React.Component {
  constructor() {
    super();
    this.state = {
      uriList: [],
    }
  }

  async componentDidMount() {
    const resp = await searchVideo();

    // const uriList = shuffle(resp.data);
    this.setState({
      uriList: resp.data
    })

    console.log(this.state.uriList);
 
  }

  // shuffle = (arr) => {
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [arr[i], arr[j]] = [arr[j], arr[i]];
  //   }
  //   return arr;
  // }



  render() {
    return (

      <div className="screen" >
        <p>Something Screen</p>
        <div className="video-container">
          
          { (this.state.uriList !== []) &&
            <Iframe url={"https://player.vimeo.com/video/" + this.state.currentVideo}
              width="300px"
              height="300px"
              id="video"
              className="video"
              display="initial"
              position="relative" />}
             
        </div>
      </div>

  )
}

}