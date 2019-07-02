import React from 'react';
import Volume from './Volume';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';
import './Screen.css';



class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      current: 0,
      volume: 0.1,
      playing: false
    }
  }

  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  componentDidMount() {
    // const previousPath = Object.keys(this.props.location.state.list)[0];
    // const urlList = "";
    // if (previousPath == "video80" || previousPath == "video90" || previousPath == "video00" || previousPath == "video10" || previousPath == "bonustrack") {
    //   const testlist = this.shuffle(Object.values(this.props.location.state.list)[0]);
    //   urlList = testlist.map((videoId) => {
    //     return `https://player.vimeo.com/video/${videoId}`
    //   });

    // } else { 
    const testlist = this.shuffle(this.props.list);
    let urlList = testlist.map((videoId) => {
      return `https://player.vimeo.com/video/${videoId}`
    });

    // }

    this.setState({
      list: urlList
    })
  }
  nextSong = () => {
    this.setState(prevState => ({
      current: prevState.current + 1
    }))
  }

  handleClickForward = (ev) => {
    ev.preventDefault();
    this.setState(prevState => ({
      current: prevState.current + 1
    }))
  }

  handleClickBackward = (ev) => {
    ev.preventDefault();
    this.setState(prevState => ({
      current: prevState.current - 1
    }))
  }

  renderVideo = () => {
    return (


      <div className="video-container">

        <ReactPlayer
          className='react-player'
          playing={this.state.playing}
          url={this.state.list[this.state.current]}
          volume={this.state.volume}
          onError={() => {
            this.nextSong()
          }}
          onEnded={() => {
            this.nextSong()
          }}
          width="800px"
          height="490px"
          config={{
            vimeo: {
              playerOptions:
              {
                autoplay: true,
                controls: false
              }
            }
          }}
        />
      </div>
    )
  }

  volumeUp = () => {
    if (this.state.volume === 1) return
    this.setState(prevState => ({
      volume: prevState.volume + 0.1
    }))
  }

  volumeDown = () => {
    if (this.state.volume === 0) return
    this.setState(prevState => ({
      volume: prevState.volume - 0.1
    }))
  }

  pause = () => {
    this.setState(prevState => ({
      playing: !prevState.playing
    }))
  }

  render() {
    return (

      <div className="screen" >
        <div className="screen-cover" >
          <div className="screen-overlay">

          </div>

          {
            this.state.list.length ?
              this.renderVideo()
              : (
                <img id="temp-screen" src="https://media.giphy.com/media/LmWnCBTOGUmw8/giphy.gif" alt="temp static" />
              )
          }

          <div className="controls">
            <button onClick={this.handleClickBackward}>Previous</button>
            <button onClick={this.handleClickForward}>Next</button>
            <Volume volume={this.state.volume} />
            <button onClick={this.volumeUp}>Volume Up</button>
            <button onClick={this.volumeDown}>Volume Down</button>
            <button onClick={this.pause}>Start/Pause</button>
          </div>

        </div>
      </div>
    )



  }
}

export default withRouter(Screen);