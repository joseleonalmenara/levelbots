import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './css/journal_theme/bootstrap.css';
import './css/Registro.css';

export default class Registro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            apellidos: '',
            numTelefono: '',
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

    sigNup = () => {
      const data = this.state;
      fetch('http://localhost:5000/api/v1/auth/register',{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function(response) {
        console.log(response.json());
      })
    }

    render() {
        return (
            <div className="Registro">
                <form className="form-signin" id="form-register" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Registrarse</h2>

                    <FormGroup controlId="nombre" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder="Nombre"
                            value={this.state.nombre}
                            onChange={event => this.setState({nombre: event.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="apellidos" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder=" Apellidos"
                            value={this.state.apellidos}
                            onChange={event => this.setState({apellidos: event.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="numTelefono" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder=" Número de teléfono"
                            value={this.state.numTelefono}
                            onChange={event => this.setState({numTelefono: event.target.value})}
                        />
                    </FormGroup>

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

                    <Button className=" btn btn-lg btn-primary btn-block" type="button" onClick={this.sigNup}>Registrarse</Button>
                    <br></br>
                    <a href="/">Tengo cuenta, iniciar sesión</a>
                </form>
            </div>
        );
    }
}
