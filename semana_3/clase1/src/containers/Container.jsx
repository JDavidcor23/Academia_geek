import React, { Component } from "react";
import { Component1 } from "../components/Component1.js";
import { Component2 } from "../components/Component2.js";

export default class Container extends Component {
  render() {
    return (
      <div>
        <h1>Hola Mundo</h1>
        <Component1 />
        <Component2 />
      </div>
    );
  }
}
