import React, { Component } from "react";
import './css/journal_theme/bootstrap.css';
import './css/style.css';
import BarraMenu from "./shared/BarraMenu";
import FaTrash from 'react-icons/lib/fa/trash';
import FaEdit from 'react-icons/lib/fa/edit';

export default class GestionAlumnos extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/empresas").
        then(response => response.json()).
        then(findresponse => {
            this.setState({
                data: [findresponse]
            });
        })
    }

    render() {
        return (
            <div>
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
                        this.state.data.map((dynamicData, Key) => {
                            let keys = Object.keys(dynamicData);
                            return keys.map(data => {
                                return (
                                    <tr>
                                        <td>{dynamicData[data].nombre}</td>
                                        <td>{dynamicData[data].numTelefono}</td>
                                        <td>{dynamicData[data].direccion}</td>
                                        <td>{dynamicData[data].correoElectronico}</td>
                                        <td>{dynamicData[data].latLng}</td>
                                        <td>{dynamicData[data].nombreTutorLaboral}</td>
                                        <td>{dynamicData[data].emailTutorLaboral}</td>
                                        <td>
                                            <a className="link-l"><FaEdit/></a>
                                            <a className="link-l"><FaTrash/></a>

                                        </td>
                                    </tr>

                                );
                            });
                        })

                    }

                    </tbody>
                </table>
            </div>
        )
    }
}