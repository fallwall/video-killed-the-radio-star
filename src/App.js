import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

 
const removeTimer = () => { 
  const hide = document.querySelector(".counter");
  hide.classList.remove("overlay");
}

class App extends React.Component {

  componentDidMount() {
    setTimeout(() => {removeTimer()}, 4000);
  }
  
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
        <div className="counter overlay"></div>

      </>
    );
  }
}

export default App;
