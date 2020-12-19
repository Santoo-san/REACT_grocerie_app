import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "koffiebonen" },
        { id: 2, title: "koffiemaler" },
      ],
    };
    this.addListitem = this.addListitem.bind(this);
  }

  addListitem(item) {
    this.setState({
      ListItem: [...this.state.ListItem].concat([item]),
    });
  }
  render() {
    const groceryItems = this.state.groceryItems.map((item) => (
      <li
        key={item.id}
        className="list-item"
        // onClick={clickItem}
        value={item.title}
      >
        {item.title}
      </li>
    ));

    return (
      <div className="Component">
        <header className="Component-header">
          <p>Test text2.....</p>

          <ul>
            {groceryItems}
            <ListItem onSubmit={this.addListitem} item="filterkoffie" />
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
}

export default List;
