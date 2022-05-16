import React, { Component } from "react";

export default class Counter extends Component {
  componentDidMount() {
    console.log("component did mount runs ");
  }

  //   it render when only the props change and state update .......
  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.num !== this.props.num)
      console.log("component did update renders");
  }

  componentWillUnmount() {
    console.log("component will unmount render ");
  }

  render() {
    return (
      <div>
        <h1>{this.props.num} :times</h1>
      </div>
    );
  }
}
