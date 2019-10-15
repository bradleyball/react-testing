import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">0</h1>
        <button data-test="increment-button">+</button>
      </div>
    );
  }
}

export default App;
