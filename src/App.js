import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //       <h1>Hi im a react App</h1>
  //   </div>
  // );
  return React.createElement('div' , null, React.createElement('h1',{className: 'App'}, 'Does this work now?'));
}

export default App;
