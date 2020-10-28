import React, { Component } from "react";
import { calculateSalaryFrom } from "../helpers/salary.js";

export default class InputFullSalary extends Component {
  constructor() {
    super();

    this.state = {
      valueFullSalary: "",
    };
  }

  handleFullSalary = (event) => {
    this.setState({ valueFullSalary: event.target.value });

    const retorno = calculateSalaryFrom(event.target.value);
    this.props.onChange(retorno);
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="fullSalary"
            type="text"
            value={this.valueFullSalary}
            onChange={this.handleFullSalary}
          />
          <label htmlFor="fullSalary">Salário Bruto</label>
        </div>
      </div>
    );
  }
}
