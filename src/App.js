import React, { Component } from 'react';
import 'react-hint/css/index.css'
import logo from './logo.svg';
import './App.css';
import AntTest from './ant-test/test1'
function About(){
  return <div>About</div>
}

function Inbox(){
  return <div>Inbox</div>
}

function Home(){
  return <div>Home</div>
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default: Child = Home;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AntTest></AntTest>
      </div>
    );
  }
}

export default App;
