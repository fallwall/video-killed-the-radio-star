import React from 'react';
import Iframe from 'react-iframe';
import './Screen.css';


class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      current: props.list[0]
    }
  }

  handleClickForward = (ev) => {
    ev.preventDefault();
    const current = this.state.list[this.state.list.indexOf(this.state.list[0]) + 1];
    this.setState({
      current: current
    })
  }

  handleClickBackward = (ev) => {
    ev.preventDefault();
    const current = this.state.list[this.state.list.indexOf(this.state.list[0]) - 1];
    this.setState({
      current: current
    })
  }


  render() {
    console.log(this.state.list);
    return (

      <div className="screen" >
        <p>Something Screen</p>
        <div className="video-container">

          {(this.state.list !== []) &&

            <Iframe url={"https://player.vimeo.com/video/" + this.state.current}
              width="450px"
              height="450px"
              id="video"
              className="video"
              display="initial"
              position="relative" />}

          <button onClick={this.handleClickBackward}>Previous</button>
          <button onClick={this.handleClickForward}>Next</button>
        </div>
      </div>

    )
  }


}

export default Screen;