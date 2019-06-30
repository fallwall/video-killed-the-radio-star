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
    this.setState({
      list: testlist,
     
    })
  }

  componentWillReceiveProps(nextProps) {
    window.location.reload();
  }


  nextSong = () => {
    this.setState(prevState => ({  
      current: prevState.current + 1
    }))
    console.log(this.state.current);
    this.state.current.forceUpdate();
     
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
      <p> THIS IS SCREEN2 TEST AREA</p>
        <div className="video-container">
         

          { 
            this.state.list !== [] &&
            <ReactPlayer
              className='react-player'
              playing
              url={urlList[this.state.current]}
              onEnded={() => {
                this.nextSong()
              }}
          />
          }
            
         
          
        </div>
      </div>
            )
  


}
}

export default withRouter(Screen2);