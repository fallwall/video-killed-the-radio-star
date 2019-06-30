import React from 'react';
import ReactPlayer from 'react-player';
import './Screen.css';


class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      current: 0
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
    let urlList;
    if(!this.state.list){
      return <div>Loading…</div>;
      }
      urlList = this.state.list.map(
        element => (`https://player.vimeo.com/video/${ element }` ));
    console.log(urlList);

    return (

      <div className="screen" >
        <p>Something Screen</p>
        <div className="video-container">
            {/* {this.state.list !== [] &&
            <Iframe url={"https://player.vimeo.com/video/" + this.state.current}
              width="450px"
              height="450px"
              id="video"
              className="video"
              display="initial"
              position="relative" />} */}
          { 
            this.state.list !== [] &&
            <ReactPlayer
            playing
            url={urlList[this.state.current]}
          />
          }
            
         
          

          <button onClick={this.handleClickBackward}>Previous</button>
          <button onClick={this.handleClickForward}>Next</button>
        </div>
      </div>
            )
  


}
}

export default Screen;