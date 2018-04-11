import React from 'react';
import ReactDOM from 'react-dom';
import store from './Components/Global/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Global/Login';
import Registro from './Components/Global/Registro';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Registro} />
            </div>

        </Router>
    </Provider>,
    document.getElementById('root')
)