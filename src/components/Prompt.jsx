import React from 'react';
import messages from '../data/messages.json';

export default class Prompt extends React.Component {
  constructor() { 
    super();
    this.state = {
      prompt: Object.values({ messages })
    }
  }

  componentDidMount() {
    setInterval(() => {
      const prompt = this.state.prompt[Math.floor(Math.random() * this.state.prompt.length)];
      this.setState({
        prompt: prompt
      })
    }, 3000)
  }

  render() {
    return (
      <>
        
        <p>{this.state.prompt} </p>
    </>
    )}
  

}