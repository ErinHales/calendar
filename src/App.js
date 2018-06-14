import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Month from "./components/Month/Month";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monthNum: 0
    };
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
      "october",
      "november",
      "december"
    ];

    const monthNum = Number(this.state.monthNum); // set month here (0 indexed)
    const year = new Date().getFullYear();
    const date = new Date(year, monthNum);
    const numDaysInMonth = date.monthDays();
    const startDay = new Date(year, monthNum, 1).getDay();
    let days = [];
    for (let i = 0; i < numDaysInMonth; i++) {
      days.push(<Month dayNum={i + 1} day={dayNames[(i + startDay) % 7]} />);
    }
    return (
      <div>
        <select className="month-select" onChange={e => this.setState({ monthNum: e.target.value })}>
          <option value={0}>January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </select>
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
