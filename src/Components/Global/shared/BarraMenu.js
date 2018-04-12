import React, { Component } from "react";
import '../css/journal_theme/bootstrap.css';

export default class BarraMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/inicio">FCTManager</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li routerLinkActive="active">
                                <a class="nav-link" href="/alumnos">Gestión de alumnos</a>
                            </li>
                            <li class="nav-item" routerLinkActive="active">
                                <a class="nav-link" href="/empresas">Gestión de empresas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Cerrar sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}