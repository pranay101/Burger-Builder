import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
import { Component } from 'react';

class App extends Component {
  state = {
    person : [
      {name:"pranay", age:'21'},
      {name:"hello", age:'31'},
      {name:"svsvfv" ,age:'61'}
    ]
  }

  switchnameHandler = () =>{
    console.log("i was clicked!!")
  }
  render({
    return (
      <div className="App">
        <h1>Welcome to my react app!!</h1>
        <button onClick = {this.switchnameHandler}>switch</button>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age} />
        <Person name = {this.state.person[1].name} age = {this.state.person[1].age}> and i like to cycle</Person>
        <Person name = {this.state.person[2].name} age = {this.state.person[2].age} />
    
      </div>
    );
  });
  
}

export default App;
