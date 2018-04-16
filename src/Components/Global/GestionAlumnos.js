import React, { Component } from "react";
import './css/journal_theme/bootstrap.css';
import './css/style.css';
import BarraMenu from "./shared/BarraMenu";
import FaTrash from 'react-icons/lib/fa/trash';
import FaEdit from 'react-icons/lib/fa/edit';
import { Button } from 'react-bootstrap';
import ModalEdicionAlumno from './shared/ModalEdicionAlumno'



export default class GestionAlumnos extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isModalOpen: false
        }
    }

    componentDidMount() {
        fetch("https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/alumnos")
            .then(response => response.json())
            .then(findresponse => {
            this.setState({
                data: [findresponse]
            });
        })
    }

    openModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    delete = (_id) => {
        fetch(`https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/alumnos/delete/${_id}`, {
            method: 'DELETE', // or 'PUT'
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(function (response) {
            console.log(response.json());
            window.location.reload()
        })
    }

    render() {
        return (
            <div>
                <ModalEdicionAlumno isModalOpen={this.state.isModalOpen} data={this.state.data}/>
                <BarraMenu/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Número de teléfono</th>
                        <th>Correo electrónico</th>
                        <th>Nota media</th>
                        <th>Empresa asignada</th>
                        <th>Dirección</th>
                        <th>Foto</th>
                        <th>Opciones</th>
                        <th style={{width: '36px'}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((dynamicData, Key) => {
                            let keys = Object.keys(dynamicData);
                            return keys.map(data => {
                                return (
                                    <tr>
                                            <td>{dynamicData[data].nombre}</td>
                                            <td>{dynamicData[data].apellidos}</td>
                                            <td>{dynamicData[data].numTelefono}</td>
                                            <td>{dynamicData[data].correoElectronico}</td>
                                            <td>{dynamicData[data].notaMedia}</td>
                                            <td>{dynamicData[data].empresaAsignada.nombre}</td>
                                            <td>{dynamicData[data].direccion}</td>
                                            <td>{dynamicData[data].foto}</td>
                                            <td>
                                                <a onClick={this.openModal.bind(this)} className="link-l"><i><FaEdit/></i></a>
                                                <a onClick={()=>{this.delete (dynamicData[data]._id)}} className="link-l"><i><FaTrash/></i></a>


                                            </td>
                                        </tr>

                                );
                            });
                        })

                    }

                    </tbody>
                    <Button className=" btn btn-lg btn-primary btn-block" type="button" href="/agregarAlumno" id="btnAgregarAlumno">Agregar alumno</Button>
                </table>

            </div>
        )
    }
}
