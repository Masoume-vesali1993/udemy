import React from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

function App() {
  return (
    <div className="App">
        <h1>Hi im a react App</h1>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
    </div>
  );
  // return React.createElement('div' , null, React.createElement('h1',{className: 'App'}, 'Does this work now?'));
}

export default App;
