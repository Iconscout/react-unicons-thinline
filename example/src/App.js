import React from "react";
import UitStar from "@iconscout/react-unicons-thinline/icons/uit-star";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UitStar size="140" color="#61DAFB" className="App-logo" />
        <p>This React icon is rendered by React Unicons.</p>
        <a
          className="App-link"
          href="https://iconscout.com/unicons"
          target="_blank"
          rel="noopener noreferrer"
        >
          View React Unicons
        </a>
      </header>
    </div>
  );
}

export default App;
