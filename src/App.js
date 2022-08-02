import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="bg-gray-400 h-screen flex justify-center items-center">
        <Calculator />
      </div>
    );
  }
}

export default App;
