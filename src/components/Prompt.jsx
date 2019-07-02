import React from 'react';
import messages from '../data/messages.json';

export default class Prompt extends React.Component {
  constructor() {
    super();
    this.state = {
      prompt: { messages }.messages,
      msg: ""
    }
  }

  componentDidMount() {
    setInterval(() => {
      const msg = this.state.prompt[Math.floor(Math.random() * this.state.prompt.length)];
      this.setState({
        msg: msg
      })
    }, 3000)
  }

  render() {
    return (
      <>
        <p>{this.state.msg} </p>
      </>
    )
  }


}