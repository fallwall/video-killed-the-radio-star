import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Intro from './Intro';
import Screen from './Screen';
import { searchVideo } from '../services/api';
import playlists from '../data/playlists.json';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    }
  }

  handleChange = (ev) => {
    const userInput = ev.target.value;
    this.setState({
      userInput: userInput
    })
  }

  handleSubmit = async (ev) => {
    ev.preventDefault();
    const responseList = await searchVideo(this.state.userInput);
    const list = responseList.map((element) => element.uri.split("/")[element.uri.split("/").length - 1]);
    this.setState({
      list: list
    })
    this.props.history.push('/Screen');
  }

  render() {
    return (
      <>
        <Route path="/" exact render={() => <Intro handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
        <Route exact path="/screen/" render={() => <Screen list={this.state.list} />} />
        <Route path="/screen/:playlist" render={(props) => {
          const list = playlists[props.match.params.playlist]
          return <Screen list={list} />
        }} />
      </>
    )
  }

}

export default withRouter(Main);