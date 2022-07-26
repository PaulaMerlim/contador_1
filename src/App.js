import React from "react";
export default class App extends React.Component {
  state = {
    numero: 0,
    maximo: 9
  };

  add = () => {
    if (this.state.numero < this.state.maximo) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };
  render() {
    return (
      <div>
        <h2> Contador </h2>
        <p> Soma Total : {this.state.maximo} </p>
        <section className="somando">
          <button>-</button>
          <h1>{this.state.numero}</h1>
          <button onClick={this.add}>+</button>
        </section>
      </div>
    );
  }
}
