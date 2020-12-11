import React from "react";

function ListItem(props) {
  return (
    <div className="List-item">
      <p>testy</p>
      <input
        type="checkbox"
        // checked={props.item.completed}
        // onChange={() => props.handleChange(props.item.id)}
      />
      {/* <p>{props.item.text}</p> */}
    </div>
  );
}

export default ListItem;
