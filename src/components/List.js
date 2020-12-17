import React from "react";
import ListItem from "./ListItem";

function List() {
  return (
    <div className="Component">
      <header className="Component-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Test text2.....</p>

        <ul>
          <ListItem item="filterkoffie" />
          <ListItem item="koffiefilters" />
          <ListItem item="koffiefilter" />
          <ListItem item="koffiekopjes" />
          <ListItem item="water" />
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
