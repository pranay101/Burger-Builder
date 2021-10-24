import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";
class App extends Component {
  state = {
    person: [
      { name: "pranay", age: "21" },
      { name: "hello", age: "31" },
      { name: "svsvfv", age: "61" },
    ],
    showPerson: false,
  };

  toggleContentHandler = () => {
    const defaultstate = this.state.showPerson;
    this.setState({ showPerson: !defaultstate });
  };
  usernameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: event.target.value, age: "21" },
        { name: "hello", age: "31" },
        { name: "svsvfv", age: "61" },
      ],
    });
  };

  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}
            changed={this.usernameChangedHandler}
          />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            changed={this.usernameChangedHandler}
          >
            and i like to cycle
          </Person>
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age}
            changed={this.usernameChangedHandler}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Welcome to my react app!!</h1>
        <button onClick={this.toggleContentHandler}>switch</button>
        {person}
      </div>
    );
  }
}
export default App;
