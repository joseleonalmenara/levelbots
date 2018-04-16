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
            data: []
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
        const data = this.state;
        fetch(`https://fctmanagerapi-roniwhquuu.now.sh/api/v1/auth/empresas/edit/${_id}`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(function(response) {
            if (response.ok) {
                console.log(response.json());
                alert('Empresa editada correctamente')
                window.location.href = "/alumnos";
            }else{
                alert('Error al editar, revise los campos')
            }
        })
    }

    render() {
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
                    <a style={{textDecoration: 'none', float: 'right', color: 'black'}} href="/empresas">X</a>
                    <br/>
                    <div className="EditarEmpresa">
                        <form onSubmit={this.handleSubmit}>
                            <h2 className="form-signin-heading">Editar empresa</h2>

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
                                    type="text"
                                    placeholder=" Número de teléfono"
                                    value={this.state.numTelefono}
                                    onChange={event => this.setState({numTelefono: event.target.value})}
                                />
                            </FormGroup>

                            <FormGroup controlId="direccion" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Dirección"
                                    value={this.state.direccion}
                                    onChange={event => this.setState({direccion: event.target.value})}
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
                                    type="text"
                                    placeholder=" Latitud, longitud"
                                    value={this.state.latLng}
                                    onChange={event => this.setState({latLng: event.target.value})}
                                />
                            </FormGroup>

                            <FormGroup controlId="tutorLaboral" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Nombre del tutor laboral"
                                    value={this.state.tutorLaboral}
                                    onChange={event => this.setState({tutorLaboral: event.target.value})}
                                />
                            </FormGroup>

                            <FormGroup controlId="emailTutorLaboral" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Correo electrónico del tutor laboral"
                                    value={this.state.emailTutorLaboral}
                                    onChange={event => this.setState({emailTutorLaboral: event.target.value})}
                                />
                            </FormGroup>


                            <Button className=" btn btn-lg btn-primary btn-block" type="button" onClick={this.agregar}>Guardar empresa</Button>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalEdicionAlumno