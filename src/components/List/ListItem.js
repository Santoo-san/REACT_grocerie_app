import React from "react";

const ListItem = ({ clickItem, readonly, item }) => {
  return (
    <li
      key={item.id}
      className="list-item"
      onClick={clickItem}
      value={item.title}
    >
      <span> {item.title || ""}</span>
      <span>{readonly ? ` Hoeveelheid: ${item.amount}` : ""}</span>
    </li>

    // <div className="List-item">
    //   <input
    //     type="checkbox"
    //     // checked={props.item.completed}
    //     // onChange={() => props.handleChange(props.item.id)}
    //   />
    //   <p>{props.item}</p>
    // </div>
  );
};

// addListitem(item) {
//   this.setState({
//     ListItem: [...this.state.ListItem].concat([item])
//   });
// }

export default ListItem;
