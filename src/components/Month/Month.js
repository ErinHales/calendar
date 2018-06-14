import React from "react";

export default function(props) {
  return (
    <div onClick={() => alert(props.day + " the " + props.dayNum)} className={`day ${props.day}`}>
      {props.day[0].toUpperCase() + props.day.slice(1)}
      <br />
      {props.dayNum}
    </div>
  );
}
