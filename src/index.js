import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Global/Login';
import Registro from './Components/Global/Registro';

ReactDOM.render(
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Registro} />
            </div>

        </Router>,
    document.getElementById('root')
)