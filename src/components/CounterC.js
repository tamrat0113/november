import React, { Component } from "react";

export default class CounterC extends Component {
  constructor(props) {
    console.log("constructor ran");

    super(props);

    this.state = {
      count: 5,
      name: "Erik",
    };

    // binding to use this inside of them, or to avoid this use => function
    this.handleClickyClickUp = this.handleClickyClickUp.bind(this);
    this.sayHi = this.sayHi.bind(this);
  }

  turnOnEngines() {
    console.log("turn on engines!!! ");
  }

  sayHi() {
    alert(this.state.name);
  }

  handleClickyClickUp() {
    console.log("increment this!");

    // Update the sate
    this.setState({ count: this.state.count + 1 });
  }

  handleClickyClickDown = () => {
    console.log("increment this!");

    // Update the sate
    this.setState({ count: this.state.count - 2 });
  };

  componentDidMount() {
    // gets called as soon as component is mounted onto the dom/screen
    console.log("component did mount");

    this.turnOnEngines();

    // maybe do some data fetching from some api
  }

  componentDidUpdate() {
    // gets called whenever the state changes
    console.log("component did update");

    // maybe run a new fetch after state is updated
  }

  componentWillUnmount() {
    // get called when the component gets removed from dom/screen
    console.log("component will unmount");

    // do clean up here
  }

  render() {
    console.log("render!");

    return (
      <div>
        <h1>Counter C</h1>
        <h2>{this.state.name}'s Class</h2>
        <div style={{ fontSize: "60px" }}>{this.state.count}</div>
        <button onClick={this.handleClickyClickUp}>Increment</button>
        <button onClick={this.handleClickyClickDown}>Decrement by 2</button>

        <button onClick={this.sayHi} style={{ color: this.props.color }}>
          Greet
        </button>
      </div>
    );
  }
}
