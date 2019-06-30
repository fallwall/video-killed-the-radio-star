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

  componentDidMount() {
    const testlist = Object.values(this.props.location.state.list);
    let urlList = testlist[0].map((videoId) => {
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
      </div>
    )
  }
}

export default withRouter(Screen2);
