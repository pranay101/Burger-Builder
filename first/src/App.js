import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";
class App extends Component {
  state = {
    person: [
      { id: 'vfvddfv', name: "pranay", age: "21" },
      { id: 'dfvdvdv', name: "hello", age: "31" },
      { id: 'vdsbsrb', name: "svsvfv", age: "61" },
    ],
    showPerson: false,
  };

  toggleContentHandler = () => {
    const defaultstate = this.state.showPerson;
    this.setState({ showPerson: !defaultstate });
  };
  usernameChangedHandler = (event,id) => {
    const personIndex = this.state.person.findIndex( p =>{return p.id === id})
    const person = {
      ...this.state.person[personIndex],
    }

    person.name = event.target.value;
    const persons = [...this.state.person]
    persons[personIndex] = person
    this.setState({person:persons});
  };

  deletePersonHandler = (personIndex) => {
    const person = this.state.person.slice();
    person.splice(personIndex, 1);
    this.setState({ person: person })
  };

  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {
            this.state.person.map((ele, index) => {
              return <Person
                name={ele.name}
                age={ele.age}
                key={ele.id}
                click={() => { this.deletePersonHandler(index) }} 
                changed ={(event) => this.usernameChangedHandler(event,ele.id)}/>
            })
          }
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
