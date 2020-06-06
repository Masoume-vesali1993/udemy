import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';


class App extends Component {
state = {
    userInput: ''
}

inputChangeHandler = (event) => {
    this.setState({userInput:event.target.value});
}


    render() {
        return (
            <div className="App">
                <ol>
                    <li>Create Two new component: UserInput and UserOutput</li>
                    <li>Create Two new component: UserInput and UserOutput</li>
                    <li>Create Two new component: UserInput and UserOutput</li>
                    <li>Create Two new component: UserInput and UserOutput</li>
                    <li>Create Two new component: UserInput and UserOutput</li>
                    <li>Create Two new component: UserInput and UserOutput</li>
                    <li>Create Two new component: UserInput and UserOutput</li>
                    <li>Create Two new component: UserInput and UserOutput</li>
                    <li>Create Two new component: UserInput and UserOutput</li>
                    <li>Create Two new component: UserInput and UserOutput</li>
                </ol>
                <p>Hi:print value</p>
                <hr />
                <input type="text"
                  onChange={this.inputChangeHandler}
                  value={this.state.userInput} />
                  <p>{this.state.userInput}</p>
                  <Validation inputLength={this.state.userInput.length} />
            </div>
        );
    }
  }
export default App;
