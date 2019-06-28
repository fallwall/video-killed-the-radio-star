import React from 'react';
import { searchVideo } from '../services/api';

export default class Search extends React.Component { 
  constructor() {
    super();
    this.state = {
      userInput: "",
      list: [],
      currentSong: ""
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
    const list = await searchVideo(this.state.userInput);
    this.setState({
      list: list
    })
    console.log(this.state.list);
  }

  // componentDidUpdate() { 
  //     // const shuffle = (arr) => {
  //     //   for (let i = arr.length - 1; i > 0; i--) {
  //     //     const j = Math.floor(Math.random() * (i + 1));
  //     //     [arr[i], arr[j]] = [arr[j], arr[i]];
  //     //   }
  //     //   return arr;
  //     // }
  //   this.setState({
  //     currentSong: this.state.list[0].uri
  //   })
  //   console.log(this.state.currentSong)
    
  // }

  render() {
    return (
      <>
        <div className="search-area">
        <p>is it working?</p>
    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
      <input type="text" name="userInput" placeholder="Search keyword..." />
      <button> Search</button>
          </form>
          </div>
      </>
  )
   }
 
}