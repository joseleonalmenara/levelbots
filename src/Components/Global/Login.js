import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './css/journal_theme/bootstrap.css';
import './css/Login.css';
import {login} from './reducer';
import {connect} from "react-redux";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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

    render() {
        /*let {correoElectronico, password} = this.state;*/
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <div className="Login">
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Iniciar sesión</h2>

                    <FormGroup controlId="correoElectronico" bsSize="large">
                        <FormControl
                            autoFocus
                            type="email"
                            placeholder="Correo electrónico"
                            value={this.state.correoElectronico}
                            onChange={e => this.setState({correoElectronico: e.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            autoFocus
                            type="password"
                            placeholder=" Contraseña"
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}
                        />
                    </FormGroup>

                    <Button className=" btn btn-lg btn-primary btn-block" type=" submit">Iniciar sesión</Button>
                    <br></br>
                    <a href="register">No tengo cuenta, regístrame</a>

                    {isLoginPending && <div>Espere...</div>}
                    {isLoginSuccess && <div>Bienvenido <b>Usuario</b>!!!</div>}
                    {loginError && <div>{loginError.message}</div>}
                </form>
            </div>
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        let {correoElectronico, password} = this.state;
        this.props.login(correoElectronico, password);
    }
}


const mapStateToProps = (state) => {
    return{
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login: (correoElectronico, password) => dispatch(login(correoElectronico, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);