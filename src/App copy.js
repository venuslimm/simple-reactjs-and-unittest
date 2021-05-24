// import logo from './logo.svg';
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Greeting from './components/greeting';
import VenusTextfield from './components/myTextfield';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  // props -> properties
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // called when the listener is triggered
  handleChange(event) {
    this.setState({value: event.target.value})
    console.log(`Event detected: ${event.target}`);
  }

  // when user submits form
  handleSubmit(event) {
    alert('Hi ' + this.state.value + '. Youre Logged in');
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <VenusTextfield/>
        <Greeting name="Venus" />
        <form onSubmit={this.handleSubmit}>
          <TextField label="username" value={this.state.value} onChange={this.handleChange}></TextField>
          <br></br>
          <TextField type="password" label="password"></TextField>
          <br></br>
          <button type="submit" value="Submit">Login</button>
        </form>
      </div>
    )
  }
}

export default App;
