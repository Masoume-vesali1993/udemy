import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //       <h1>Hi im a react App</h1>
  //   </div>
  // );
  return React.createElement('div' , null, 'h1', 'Hi, Im a React App!!!');
}

export default App;
