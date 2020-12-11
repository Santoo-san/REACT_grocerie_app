import React from "react";
import ListItem from "./ListItem";

function List() {
  return (
    <div className="Component">
      <header className="Component-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Test text2.....</p>

        <ul>
          <ListItem />
          <li>villa</li>
          <li>sportwagen</li>
          <li>jacht</li>
          <li>vakantiehuis</li>
          <li>groentetuin</li>
        </ul>
        {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
      </header>
    </div>
  );
}

export default List;
