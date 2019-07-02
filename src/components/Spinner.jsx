import React from 'react';
import Search from './Search';
import Prompt from './Prompt';
import staticDisk from '../images/still_rotatingrecord.png';
import disk from '../images/rotatingrecord.gif';
import {Redirect } from 'react-router-dom';
import "./Spinner.css";

//below is for spinner random redirection
const index = Math.floor(Math.random() * 4);
const era = [
  '/screen/video80',
  '/screen/video90',
  '/screen/video00',
  '/screen/video10'];
const randomEra = era[index];

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={randomEra} />
    }
  }

  //below is to set disk image into moving upon click and reverse
  movingDisk = (ev) => {
    const status = ev.target.getAttribute("src");
    if (status === `${staticDisk}`) {
      ev.target.setAttribute("src", `${disk}`);
    } else {
      ev.target.setAttribute("src", `${staticDisk}`);
      setTimeout(() => {
        this.setState({
          redirect: true
        });
      }, 3000);
    }
  }

  render() {
    return (
      <>
        {this.renderRedirect()}
        <div className="spinner">
          <div className="spinner-container">
            <Prompt />
            <Search handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
            <div className="disk">
              <img src={staticDisk} alt="Spinning record" onClick={this.movingDisk} />
            </div>
          </div>
        </div>
      </>
    )
  }
}