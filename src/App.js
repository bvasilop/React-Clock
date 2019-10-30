import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    const { time } = this.state;
    return (
      <div className="App-clock">
      <h1> Hello, Seattle</h1>
      <h2>It is currently {time}</h2>
      </div>
    );
  }
}

export default App;
