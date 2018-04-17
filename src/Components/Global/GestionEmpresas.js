import React, { Component } from "react";
import './css/journal_theme/bootstrap.css';
import './css/style.css';
import BarraMenu from "./shared/BarraMenu";
import FaTrash from 'react-icons/lib/fa/trash';
import FaEdit from 'react-icons/lib/fa/edit';
import { Button } from 'react-bootstrap';
import ModalEdicionEmpresa from './shared/ModalEdicionEmpresa'



export default class GestionEmpresas extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isModalOpen: false,
            selectedIndex: 0,
        }
    }

    componentDidMount() {
        fetch("https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/empresas")
            .then(response => response.json())
            .then(findresponse => {
                this.setState({
                    data: findresponse
                });
                console.log("findresponse", findresponse)
            })
    }

    openModal(index){
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            selectedIndex: index
        });
    }

    delete = (_id) => {
        fetch(`https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/empresas/delete/${_id}`, {
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
                {
                    this.state.data.length > 0 &&  <ModalEdicionEmpresa isModalOpen={this.state.isModalOpen} data={this.state.data[this.state.selectedIndex]}/>
                }
                <BarraMenu/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Número de teléfono</th>
                        <th>Dirección</th>
                        <th>Correo electrónico</th>
                        <th>Latitud y longitud</th>
                        <th>Tutor laboral</th>
                        <th>Email tutor laboral</th>
                        <th>Opciones</th>
                        <th style={{width: '36px'}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((dynamicData, index) => {
                            return (
                                <tr>
                                    <td>{dynamicData.nombre}</td>
                                    <td>{dynamicData.numTelefono}</td>
                                    <td>{dynamicData.direccion}</td>
                                    <td>{dynamicData.correoElectronico}</td>
                                    <td>{dynamicData.latLng}</td>
                                    <td>{dynamicData.nombreTutorLaboral}</td>
                                    <td>{dynamicData.emailTutorLaboral}</td>
                                    <td>
                                        <a onClick={()=> {this.openModal(index)}} className="link-l"><i><FaEdit/></i></a>
                                        <a onClick={()=>{this.delete (dynamicData._id)}} className="link-l"><i><FaTrash/></i></a>


                                    </td>
                                </tr>

                            );
                        })

                    }

                    </tbody>
                    <Button className=" btn btn-lg btn-primary btn-block" type="button" href="/agregarEmpresa" id="btnAgregarAlumno">Agregar empresa</Button>

                </table>
            </div>
        )
    }
}

