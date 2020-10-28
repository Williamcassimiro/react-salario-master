import React, { Component } from "react";

export default class Progressbar extends Component {
  render() {
    return (
      <div
        style={{
          height: "10px",
          width: this.props.percentagem,
          backgroundColor: this.props.color,
          float: "left",
        }}
      ></div>
    );
  }
}
