import React from 'react';
import Volume from './Volume';
import ReactPlayer from 'react-player';
import './Screen.css';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      current: 0,
      volume: 0.1,
      playing: false,
      mouseOnVolume: false
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
    const testlist = this.shuffle(this.props.list);
    let urlList = testlist.map((videoId) => {
      return `https://player.vimeo.com/video/${videoId}`
    });
    this.setState({
      list: urlList
    })
  }

  //to next song for error or end of a song
  nextSong = () => {
    this.setState(prevState => ({
      current: prevState.current + 1
    }))
  }

  //buttons for next/previous track
  handleClickForward = (ev) => {
    ev.preventDefault();
    if (this.state.current < this.state.list.length) {
      this.setState(prevState => ({
        current: prevState.current + 1
      }))
    }
  }
  handleClickBackward = (ev) => {
    ev.preventDefault();
    if (this.state.current > 0) {
      this.setState(prevState => ({
        current: prevState.current - 1
      }))
    }
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
          width="500px"
          height="483px"
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

  //volume buttons
  volumeUp = () => {
    if (this.state.volume < 0.9) {
      this.setState(prevState => ({
        volume: prevState.volume + 0.1
      }))
    }
  }
  volumeDown = () => {
    if (this.state.volume > 0.1) {
      this.setState(prevState => ({
        volume: prevState.volume - 0.1
      }))
    }
  }

  //pause/start button
  pause = () => {
    this.setState(prevState => ({
      playing: !prevState.playing
    }))
  }


  //mouse enter/leave volume button >> volume bar appear/disappear
  handleMouseEnter = () => {
    this.setState({
      mouseOnVolume: true
    })
  }
  handleMouseLeave = () => {
    this.setState({
      mouseOnVolume: false
    })
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
            <button
              onClick={this.handleClickBackward}>
              <span>Previous</span>
            </button>
            <button
              onClick={this.handleClickForward}>
              <span>Next</span>
            </button>

            <button
              onClick={this.volumeUp}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}>
              <span>Vol ++</span>
            </button>

            <button
              onClick={this.volumeDown}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}>
              <span>Vol --</span>
            </button>

            <button
              onClick={this.pause}>
              <span>Start/Pause</span>
            </button>

            {this.state.mouseOnVolume &&
              <Volume volume={this.state.volume} />}
          </div>

        </div>
      </div>
    )
  }
}
