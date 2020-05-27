import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value'
//   }

//   switchNameHandler = () => {
//     // console.log('Was clicked!');
//     //Dont DO THIS: this.state.persons[0].name = 'Masoume';
//     this.setState( {
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     })
//   }

//   render() {
//   return (
//     <div className="App">
//         <h1>Hi im a react App</h1>
//         <button OnClick={() => this.switchNameHandler()}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//     </div>
//   );
//   // return React.createElement('div' , null, React.createElement('h1',{className: 'App'}, 'Does this work now?'));
//   }
// }

// export default App;


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
  render() {
      return (
          <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p>This is really working.</p>
              <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
              <Person
               click={this.switchNameHandler} name={this.state.persons[0].name} 
               age={this.state.persons[0].age}
               click={this.switchNameHandler.bind(this, 'Max!')}>My Passion: Hiking</Person>
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
