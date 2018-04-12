import React, { Component } from 'react';
import './css/App.css';

//Components

import Login from './Login'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Login/>
            </div>
        );
    }
}

export default App