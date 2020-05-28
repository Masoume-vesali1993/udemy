import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
    state = {
        username: 'supermax'
    }

    usernameChangedHander = (event) => {
        this.setState({username: event.target.value});
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
                <UserInput 
                changed={this.usernameChangedHander} 
                currentName={this.state.username} />
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName="Max"/>
            </div>
        )
    }
  }
export default App;
