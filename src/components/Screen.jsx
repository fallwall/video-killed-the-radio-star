import React from 'react';
import ReactPlayer from 'react-player';
import './Screen.css';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      current: 0
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
        </div>
      </div>
    )



  }
}

export default Screen;