import React, { useState } from "react";

//state componet (props-lescomponet)
//nu putem modifica props
// dar putem avea mai mute stats in interiorul componetei
function ToDoList(props) {
  //isDone prea valoarea/propietatile setata de setData
  const [isDone, setDone] = useState(false);

  function handleClick(event) {
    console.log("click press");
    setDone((prevValue) => {
      return !prevValue;
    });
  }
  // in style poti adauga o functie booling
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.list}
      </li>
    </div>
  );
}
export default ToDoList;
