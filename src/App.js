import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    //Dont DO THIS: this.state.persons[0].name = 'Masoume';
  }

  render() {
  return (
    <div className="App">
        <h1>Hi im a react App</h1>
        <button onClick={this.switchNameHandler()}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
  // return React.createElement('div' , null, React.createElement('h1',{className: 'App'}, 'Does this work now?'));
  }
}

export default App;
