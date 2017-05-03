import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import Subheader from './Subheader.js';
import Button from './Button.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.approve = this.approve.bind(this);
    this.disapprove = this.disapprove.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goBack = this.goBack.bind(this);
    this.exit = this.exit.bind(this);
  }

  handleClick(event) {
    console.log('clicked!');
  }

  approve(id) {
    console.log('trigger approve event');
  }

  disapprove(id) {
    console.log('trigger disapprove event');
  }

  goNext(id) {
    console.log('trigger goNext event');
  }

  goBack(id) {
    console.log('trigger goBack event');
  }

  exit(id) {
    console.log('trigger exit event');
  }


  render() {
    return (
      <div className="App">
        <Header>
          <img src={logo} className="App-logo row" alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Subheader>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Subheader>
        <Header>
          <Button text="Click fool!" handleClick={this.handleClick} />
        </Header>        
      </div>
    );
  }
}

export default App;
