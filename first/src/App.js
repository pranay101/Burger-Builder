import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person.js";
import { Component } from "react";

class App extends Component {
  state = {
    person: [
      { name: "pranay", age: "21" },
      { name: "hello", age: "31" },
      { name: "svsvfv", age: "61" },
    ],
  };

  switchnameHandler = (newName) => {
    this.setState(
      {
        person: [
          { name: newName, age: "21" },
          { name: "hello", age: "31" },
          { name: "svsvfv", age: "61" },
        ],
      }
    )
  };

  nameChnagedHandler = (event) => {
    this.setState(
      {
        person: [
          { name: "Pranay", age: "21" },
          { name: event.target.value, age: "31" },
          { name: "svsvfv", age: "61" },
        ],
      }
    )
  };
  render() {
    return (
      <div className="App">
        <h1>Welcome to my react app!!</h1>
        <button onClick={this.switchnameHandler.bind(this,"Pranay")}>switch</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age}
        click = {this.switchnameHandler.bind(this,"Prajapati")}
        changed = {this.nameChnagedHandler}>
          and i like to cycle
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;
