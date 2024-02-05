import React from "react";
import logo from "./logo.svg";
import files from "./context";
import "./App.css";

function App() {
  const filesList = Object.keys(files).map(fileName => ({
    name: fileName,
    url: files[fileName],
  }))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          // href={file}
          target="_blank"
          rel="noreferrer"
          download="Example"
        >
          View docs
        </a> */}
        {filesList.map((file, index) => (
          <li key={index}>
            <a href={file.url} download={file.name}>
              {file.name.slice(2)}
            </a>
          </li>
        ))}
      </header>
    </div>
  );
}

export default App;
