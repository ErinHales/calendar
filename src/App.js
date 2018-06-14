import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Month from "./components/Month/Month";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "november",
      "december"
    ];
    const date = new Date();
    const numDaysInMonth = date.monthDays();
    const monthNum = 8; // set month here (0 indexed)
    const year = date.getFullYear();
    const startDay = new Date(year, monthNum, 1).getDay();
    let days = [];
    for (let i = 0; i < numDaysInMonth; i++) {
      days.push(<Month dayNum={i + 1} day={dayNames[(i + startDay) % 7]} />);
    }
    return (
      <div>
        <h2 className="month-title">{`${monthNames[monthNum]} ${year}`}</h2>
        <div className="grid-container">{days}</div>
      </div>
    );
  }
}

export default App;

// add function to Date prototype that will get the number of days in the month
Date.prototype.monthDays = function() {
  var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
  return d.getDate();
};
