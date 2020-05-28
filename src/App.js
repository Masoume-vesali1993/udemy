import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
          {name: 'Maria', age: 23},
          {name: 'George', age: 29},
          {name: 'Patricia', age: 24}
      ]
  }
  switchNameHandler = (newName) => {
      //console.log('was clicked');
      this.setState({
          persons: [
              {name: newName , age: 23},
              {name: 'George', age: 29},
              {name: 'Patricia', age: 26}
          ]
      })
  }


  nameChangedHandler = (event) => {
    this.setState({
        persons: [
            {name: 'Max' , age: 23},
            {name: event.target.value, age: 29},
            {name: 'Patricia', age: 25}
        ]
    })
  }

  render() {
      return (
          <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p>This is really working.</p>
              <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
              <Person
               click={this.switchNameHandler} name={this.state.persons[0].name} 
               age={this.state.persons[0].age}
               click={this.switchNameHandler.bind(this, 'Max!')}
               changed={this.nameChangedHandler}
               >My Passion: Hiking</Person>
              <Person
               name={this.state.persons[1].name} 
               age={this.state.persons[1].age}/>
              <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div>
      );
  }
}

export default App;
