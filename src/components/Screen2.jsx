import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Screen.css';

class Screen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      current: 0
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
    const testlist = this.shuffle(Object.values(this.props.location.state.list)[0]);
    let urlList = testlist.map((videoId) => {
      return `https://player.vimeo.com/video/${videoId}`
    });
    this.setState({
      list: urlList
    })
  }

  componentWillReceiveProps(nextProps) {
    window.location.reload();
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
        <p> THIS IS SCREEN2 TEST AREA</p>
        <div className="video-container">
          <ReactPlayer
            className='react-player'
            playing
            url={this.state.list[this.state.current]}
            onEnded={() => {
              this.nextSong()
            }}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.state.list.length ?
            this.renderVideo()
            : (
              <div>Loading…</div>
            )
        }
          <button onClick={this.handleClickBackward}>Previous</button>
          <button onClick={this.handleClickForward}>Next</button>
      </div>
    )
  }
}

export default withRouter(Screen2);
