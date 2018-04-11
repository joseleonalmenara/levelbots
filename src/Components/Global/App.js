import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/App.css';

//Components

import Login from './Login'
import Registro from './Registro'

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