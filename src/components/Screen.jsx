import React from 'react';
import Volume from './Volume';
import ReactPlayer from 'react-player';
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
    console.log(this.state.list);
  }

  componentDidMount() {
    const testlist = Object.values(this.props.list);
    let urlList = testlist.map((videoId) => {
      return `https://player.vimeo.com/video/${videoId}`
    });
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
      <div className="screen" >
        <p> SEARCH RESULT AREA</p>
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
          />
        </div>
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

        <div className="video-container">

          {
            this.state.list.length ?
              this.renderVideo()
              : (
                <div>Loading…</div>
              )
          }
          <button onClick={this.handleClickBackward}>Previous</button>
          <button onClick={this.handleClickForward}>Next</button>
          <Volume volume={this.state.volume} />
          <button onClick={this.volumeUp}>Volume Up</button>
          <button onClick={this.volumeDown}>Volume Down</button>
          <button onClick={this.pause}>Pause</button>
        </div>
      </div>
    )



  }
}

export default Screen;