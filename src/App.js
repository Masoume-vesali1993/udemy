import React, { Component } from 'react';
import './App.css';


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
            </div>
        );
    }
  }
export default App;
