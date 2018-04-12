import React, { Component } from "react";
import './css/journal_theme/bootstrap.css';
import BarraMenu from "./shared/BarraMenu";
import './css/style.css';

export default class PaginaInicial extends Component {
    render() {
        return (
            <div className="PaginaInicial">
                <BarraMenu></BarraMenu>
                <h2 id="titulo">Bienvenido al panel de administración de FCTManager</h2>
                <br></br>
                    <h5 id="instrucciones">Desde este panel de administración se podrán registrar los profesores (desde la pantalla principal)</h5>
                    <br></br>
                        <h5 id="instrucciones">Se podrá hacer la gestión de los alumnos, es decir las operaciones básicas CRUD</h5>
                        <ul>
                            <li><a href="/alumnos">Mostrar todos los alumnos</a></li>
                            <li><a href="/alumnos">Guardar alumnos</a></li>
                            <li>Editar alumnos</li>
                            <li>Borrar alumnos</li>
                        </ul>
                        <br></br>
                            <h5 id="instrucciones">Se podrá hacer la gestión de las empresas, es decir las operaciones básicas CRUD</h5>
                            <ul>
                                <li><a href="/empresas">Mostrar todas las empresas</a></li>
                                <li><a href="/empresas">Guardar empresas</a></li>
                                <li>Editar empresas</li>
                                <li>Borrar empresas</li>
                            </ul>


            </div>
        );
    }
}
