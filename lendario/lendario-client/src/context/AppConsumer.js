import React, { Component } from "react";
import AppContext from "./AppContext";

class Consumer extends Component {
  render() {
    return <AppContext.Consumer>{this.props.children}</AppContext.Consumer>;
  }
}

export default Consumer;
