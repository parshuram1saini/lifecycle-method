import React, { Component } from "react";
// import Counter from "./Counter";
import Functionlife from "./Functionlife";

export class Classlife extends Component {
  state = {
    num: 0,
  };
  // only render first time .........
  // componentDidMount() {
  //   console.log("component did mount runs ");
  // }

  handleclick() {
    this.setState((state) => ({ num: state.num + 1 }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleclick.bind(this)}>increment</button>
        {/* <Counter num={this.state.num} /> */}
        {/* <Functionlife num={this.state.num} /> */}
      </div>
    );
  }
}

export default Classlife;
