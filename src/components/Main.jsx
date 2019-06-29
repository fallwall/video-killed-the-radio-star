import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Intro from './Intro';
import Screen from './Screen';
import { searchVideo } from '../services/api';

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
    console.log(this.state.userInput);
  }

  handleSubmit = async (ev) => {
    ev.preventDefault();
    const list = await searchVideo(this.state.userInput);
    this.setState({
      list: list
    })
    console.log(this.state.list);
    // this.props.history.push('/Screen');
  }

  render() {
    return (
    <>
      <Route path="/" exact render={() => <Intro handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>} />
      <Route path="/screen" render={()=> <Screen />}/>
    </>
  )}
  
}

export default withRouter(Main);