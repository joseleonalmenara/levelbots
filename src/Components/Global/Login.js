import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './css/journal_theme/bootstrap.css';
import './css/style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            correoElectronico: '',
            password: ''
        };
    }

    validateForm() {
        return this.state.correoElectronico.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    login = () => {
        const data = this.state;
        fetch('https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/login',{
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(function(response) {
            console.log(response.json());
            if (response.ok) {
                alert('Login correcto')
                window.location.href = '/inicio'
            }else {
                alert('Login incorrecto')
            }
        })
    }

    render() {
        return (
            <div className="Login">
                <form className="form-signin" id="form-login" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Iniciar sesión</h2>

                    <FormGroup controlId="correoElectronico" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder=" Correo electrónico"
                            value={this.state.correoElectronico}
                            onChange={event => this.setState({correoElectronico: event.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            autoFocus
                            type="password"
                            placeholder=" Contraseña"
                            value={this.state.password}
                            onChange={event => this.setState({password: event.target.value})}
                        />
                    </FormGroup>

                    <Button className=" btn btn-lg btn-primary btn-block" type="button" onClick={this.login}>Iniciar sesión</Button>
                    <br></br>
                    <a href="register">No tengo cuenta, regístrame</a>
                </form>
            </div>
        );
    }
}
