import React from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

function App() {
  return (
    <div className="App">
        <h1>Hi im a react App</h1>
        <Person />
    </div>
  );
  // return React.createElement('div' , null, React.createElement('h1',{className: 'App'}, 'Does this work now?'));
}

export default App;
