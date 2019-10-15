import React from "react";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={false}></Congrats>
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        ></GuessedWords>
      </div>
    );
  }
}

export default App;
