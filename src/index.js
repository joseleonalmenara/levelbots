import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Global/Login';
import Registro from './Components/Global/Registro';
import GestionAlumnos from './Components/Global/GestionAlumnos';
import GestionEmpresas from './Components/Global/GestionEmpresas';
import PaginaInicial from './Components/Global/PaginaInicial';
import AgregarAlumno from "./Components/Global/AgregarAlumno";
import AgregarEmpresa from "./Components/Global/AgregarEmpresa";

/*<Route path="*" component={NotFoundPage}/>*/

ReactDOM.render(
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Registro} />
                <Route path="/inicio" component={PaginaInicial} />
                <Route path="/empresas" component={GestionEmpresas} />
                <Route path="/alumnos" component={GestionAlumnos} />
                <Route path="/agregarAlumno" component={AgregarAlumno} />
                <Route path="/agregarEmpresa" component={AgregarEmpresa} />
            </div>

        </Router>,
    document.getElementById('root')
)