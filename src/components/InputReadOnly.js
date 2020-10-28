import React, { Component } from "react";

export default class InputReadOnly extends Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        readOnly
        placeholder={this.props.placeholder}
      />
    );
  }
}
