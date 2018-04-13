import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './css/journal_theme/bootstrap.css';
import './css/style.css';

export default class AgregarEmpresa extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            numTelefono: '',
            direccion: '',
            correoElectronico: '',
            latLng: '',
            tutorLaboral: '',
            emailTutorLaboral: ''
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

    agregar = () => {
      const data = this.state;
      fetch('https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/empresas/add',{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function(response) {
        console.log(response.json());
        alert('Empresa agregada correctamente')
          window.location.href = "/empresas";
      })
    }

    render() {
        return (
            <div className="AgregarEmpresa">
                <form className="form-signin" id="form-register" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Agregar empresa</h2>

                    <FormGroup controlId="nombre" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder="Nombre"
                            value={this.state.nombre}
                            onChange={event => this.setState({nombre: event.target.value})}
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

                    <FormGroup controlId="direccion" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder=" Dirección"
                            value={this.state.direccion}
                            onChange={event => this.setState({direccion: event.target.value})}
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

                    <FormGroup controlId="notaMedia" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder=" Latitud, longitud"
                            value={this.state.latLng}
                            onChange={event => this.setState({latLng: event.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="tutorLaboral" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder=" Nombre del tutor laboral"
                            value={this.state.tutorLaboral}
                            onChange={event => this.setState({tutorLaboral: event.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="emailTutorLaboral" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder=" Correo electrónico del tutor laboral"
                            value={this.state.emailTutorLaboral}
                            onChange={event => this.setState({emailTutorLaboral: event.target.value})}
                        />
                    </FormGroup>


                    <Button className=" btn btn-lg btn-primary btn-block" type="button" onClick={this.agregar}>Guardar empresa</Button>
                    <br></br>
                    <a href="/empresas">Cancelar</a>
                </form>
            </div>
        );
    }
}
