import React from "react";

//state componet (props-lescomponet)
//nu putem modifica props
// dar putem avea mai mute stats in interiorul componetei
function ToDoList(props) {
 
  
  // onClick va lua o propietate specificata in App.jsx
  return (

    // <div onClick={props.onChecked (props.id)}> 
    //atunci cand avem o paranteza nu trecem propietate 
    // ci o chemam imediat, pt a trece o propietate trebui sa avem o functie

    <div onClick={()=>{props.onChecked(props.id)}} >
      <li>
        {props.list}
      </li>
    </div>
  );
}
export default ToDoList;
