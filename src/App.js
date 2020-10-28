import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import Title from "./components/Title";
import Progressbar from "./components/Progressbar";
import { formatMoney } from "./helpers/formatters";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      baseINSS: "",
      discountINSS: "",
      baseIRPF: "",
      netSalary: "",
      percentINSSFormat: "",
      percentIRPFFormat: "",
      percentNetSalaryFormat: "",
      discountIRPF: "",
      colorINSS: "#e67e22",
      colorIRPF: "#c0392b",
      colorSalary: "#16a085",
      percentINSS: "0",
      percentIRPF: "0",
      percentNetSalary: "0",
    };
  }

  handleOnChange = (objRetorno) => {
    if (objRetorno.baseINSS != "") {
      this.setState({
        baseINSS: `${formatMoney(objRetorno.baseINSS)}` || "",
        discountINSS: `${formatMoney(objRetorno.discountINSS)}` || "",
        baseIRPF: `${formatMoney(objRetorno.baseIRPF)}` || "",
        netSalary: `${formatMoney(objRetorno.netSalary)}` || "",
        percentINSSFormat: `(${objRetorno.percentINSS}%)` || "",
        percentIRPFFormat: `(${objRetorno.percentIRPF}%)` || "",
        percentNetSalaryFormat: `(${objRetorno.percentNetSalary}%)` || "",
        discountIRPF: `${formatMoney(objRetorno.discountIRPF)}` || "",
        percentINSS: objRetorno.percentINSS,
        percentIRPF: objRetorno.percentIRPF,
        percentNetSalary: objRetorno.percentNetSalary,
      });
    } else {
      this.setState({
        baseINSS: "",
        discountINSS: "",
        baseIRPF: "",
        netSalary: "",
        percentINSSFormat: "",
        percentIRPFFormat: "",
        percentNetSalaryFormat: "",
        discountIRPF: "",
        percentINSS: "0",
        percentIRPF: "0",
        percentNetSalary: "0",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Title titulo="React - Salário" />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <InputFullSalary onChange={this.handleOnChange}></InputFullSalary>
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <InputReadOnly
              value={this.state.baseINSS}
              placeholder="Base INSS"
            ></InputReadOnly>
          </div>
          <div className="col s3">
            <InputReadOnly
              value={`${this.state.discountINSS} ${this.state.percentINSSFormat}`.trim()}
              placeholder="Desconto INSS"
            ></InputReadOnly>
          </div>
          <div className="col s3">
            <InputReadOnly
              value={this.state.baseIRPF}
              placeholder="Base IRPF"
            ></InputReadOnly>
          </div>
          <div className="col s3">
            <InputReadOnly
              value={`${this.state.discountIRPF} ${this.state.percentIRPFFormat}`.trim()}
              placeholder="Desconto IRPF"
            ></InputReadOnly>
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <InputReadOnly
              value={`${this.state.netSalary} ${this.state.percentNetSalaryFormat}`.trim()}
              placeholder="Salário líquido"
            ></InputReadOnly>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <Progressbar
              percentagem={`${this.state.percentINSS}%`}
              color={this.state.colorINSS}
              // percentagemFormated={this.state.percentINSSFormat}
            />
            <Progressbar
              percentagem={`${this.state.percentIRPF}%`}
              color={this.state.colorIRPF}
              // percentagemFormated={this.state.percentIRPFFormat}
            />
            <Progressbar
              percentagem={`${this.state.percentNetSalary}%`}
              color={this.state.colorSalary}
              // percentagemFormated={this.state.percentNetSalaryFormat}
            />
          </div>
        </div>
      </div>
    );
  }
}
