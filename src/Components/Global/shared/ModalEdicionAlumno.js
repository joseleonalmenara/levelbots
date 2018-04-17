import React from 'react';
import Modal from 'react-modal';
import { Button, FormGroup, FormControl } from "react-bootstrap";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        width                 : '45%',
        height                : '500px',
        transform             : 'translate(-50%, -50%)',
        overlfow              : 'scroll',
}
};

class ModalEdicionAlumno extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: this.props.isModalOpen,
            data: this.props.data,
            dataEmpresas: []
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    componentDidMount() {
        fetch("https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/empresas")
            .then(response => response.json())
            .then(findresponse => {
                this.setState({
                    dataEmpresas: [findresponse]
                });
            })
    }

    componentWillReceiveProps(nextProps){
        if(this.props.data._id !== nextProps.data._id){
            this.setState({data: nextProps.data})
        }
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }


    editar = (_id) => {
        const data = this.state.data;
        fetch(`https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/alumnos/edit/${_id}`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(function(response) {
            if (response.ok) {
                console.log(response.json());
                alert('Alumno editado correctamente')
                window.location.href = "/alumnos";
            }else{
                alert('Error al editar, revise los campos')
            }
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.props.isModalOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">

                    <h2 ref={subtitle => this.subtitle = subtitle}></h2>
                    <a style={{textDecoration: 'none', float: 'right', color: 'black'}} href="/alumnos">X</a>
                    <br/>
                    <div className="EditarAlumno">
                        <form onSubmit={this.handleSubmit}>
                            <h2 className="form-signin-heading">Editar alumno</h2>

                            <FormGroup controlId="nombre" bsSize="large">
                                <FormControl
                                    autoFocus
                                    type="text"
                                    placeholder="Nombre"
                                    value={this.state.data.nombre}
                                    onChange={event => this.setState({data:{...this.state.data, nombre: event.target.value}})}
                                />
                            </FormGroup>

                            <FormGroup controlId="apellidos" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Apellidos"
                                    value={this.state.data.apellidos}
                                    onChange={event => this.setState({data:{...this.state.data, apellidos: event.target.value}})}
                                />
                            </FormGroup>

                            <FormGroup controlId="numTelefono" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Número de teléfono"
                                    value={this.state.data.numTelefono}
                                    onChange={event => this.setState({data:{...this.state.data, numTelefono: event.target.value}})}
                                />
                            </FormGroup>

                            <FormGroup controlId="correoElectronico" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Correo electrónico"
                                    value={this.state.data.correoElectronico}
                                    onChange={event => this.setState({data:{...this.state.data, correoElectronico: event.target.value}})}
                                />
                            </FormGroup>

                            <FormGroup controlId="notaMedia" bsSize="large">
                                <FormControl
                                    type="number"
                                    placeholder=" Nota media"
                                    value={this.state.data.notaMedia}
                                    onChange={event => this.setState({data:{...this.state.data, notaMedia: event.target.value}})}
                                />
                            </FormGroup>

                            <select value={this.state.data.empresaAsignada} onChange={event => this.setState({data:{...this.state.data, empresaAsignada: event.target.value}})}
                            >
                                <option value=""> --- Seleccione una empresa ---</option>
                                {
                                    this.state.dataEmpresas.map((dynamicData, Key) => {
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
                                    value={this.state.data.direccion}
                                    onChange={event => this.setState({data:{...this.state.data, direccion: event.target.value}})}
                                />
                            </FormGroup>

                            <FormGroup controlId="foto" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Foto"
                                    value={this.state.data.foto}
                                    onChange={event => this.setState({data:{...this.state.data, foto: event.target.value}})}
                                />
                            </FormGroup>

                            <Button className=" btn btn-lg btn-primary btn-block" type="button" onClick={()=>{this.editar(this.state.data._id)}}>Guardar alumno</Button>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalEdicionAlumno