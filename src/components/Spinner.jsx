import React from 'react';
import Search from './Search';
import Prompt from './Prompt';
import staticDisk from '../images/still_rotatingrecord.png';
import disk from '../images/rotatingrecord.gif';
import { withRouter, Redirect } from 'react-router-dom';
import "./Spinner.css";






class Spinner extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/screen/video90' />
    }
  }
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

export default withRouter(Spinner);