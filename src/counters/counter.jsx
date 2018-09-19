import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.forpa()}</span>
        <button className=" btn btn-secondry btn-lg">increment</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes +=
      this.state.count === 0
        ? (style = color = "green")
        : "badge badge-primary m2";
    console.log("anything");
  }

  forpa() {
    return this.state.count === 0 ? "zero" : "Hero";
  }
}

export default Counter;
