import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './css/journal_theme/bootstrap.css';
import './css/style.css';

export default class AgregarAlumno extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            apellidos: '',
            numTelefono: '',
            correoElectronico: '',
            notaMedia: '',
            empresaAsignada: '',
            direccion: '',
            foto: '',
            data: []
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

    componentDidMount() {
        fetch("https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/empresas")
            .then(response => response.json())
            .then(findresponse => {
                this.setState({
                    data: [findresponse]
                });
            })
    }

    agregar = () => {
        const data = this.state;
        fetch('https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/alumnos/add',{
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(function(response) {
            if (response.ok) {
                console.log(response.json());
                alert('Alumno agregado correctamente')
                window.location.href = "/alumnos";
            }else{
                alert('Error al agregar, revise los campos')
            }
        })
    }

    render() {
        return (
            <div className="AgregarAlumno">
                <form className="form-signin" id="form-register" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Agregar alumno</h2>

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
                            type="text"
                            placeholder=" Apellidos"
                            value={this.state.apellidos}
                            onChange={event => this.setState({apellidos: event.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="numTelefono" bsSize="large">
                        <FormControl
                            type="text"
                            placeholder=" Número de teléfono"
                            value={this.state.numTelefono}
                            onChange={event => this.setState({numTelefono: event.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="correoElectronico" bsSize="large">
                        <FormControl
                            type="text"
                            placeholder=" Correo electrónico"
                            value={this.state.correoElectronico}
                            onChange={event => this.setState({correoElectronico: event.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="notaMedia" bsSize="large">
                        <FormControl
                            type="number"
                            placeholder=" Nota media"
                            value={this.state.notaMedia}
                            onChange={event => this.setState({notaMedia: event.target.value})}
                        />
                    </FormGroup>

                    <select value={this.state.empresaAsignada} onChange={event => this.setState({empresaAsignada: event.target.value})}>
                        <option value=""> --- Seleccione una empresa ---</option>
                        {
                            this.state.data.map((dynamicData, Key) => {
                                let keys = Object.keys(dynamicData);
                                return keys.map(data => {
                                    return (
                                            <option value={dynamicData[data]._id}>{dynamicData[data].nombre}</option>

                                    );
                                });
                            })

                        }

                    </select>


                    <FormGroup controlId="direccion" bsSize="large">
                        <br/>
                        <FormControl
                            type="text"
                            placeholder=" Dirección"
                            value={this.state.direccion}
                            onChange={event => this.setState({direccion: event.target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="foto" bsSize="large">
                        <FormControl
                            type="text"
                            placeholder=" Foto"
                            value={this.state.foto}
                            onChange={event => this.setState({foto: event.target.value})}
                        />
                    </FormGroup>

                    <Button className=" btn btn-lg btn-primary btn-block" type="button" onClick={this.agregar}>Guardar alumno</Button>
                    <br></br>
                    <a href="/alumnos">Cancelar</a>
                </form>
            </div>
        );
    }
}