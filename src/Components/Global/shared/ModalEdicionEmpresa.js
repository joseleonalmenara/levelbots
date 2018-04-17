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

class ModalEdicionEmpresa extends React.Component {
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
                window.location.href = "/empresas";
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
                                    value={this.state.data.nombre}
                                    onChange={event => this.setState({nombre: event.target.value})}
                                />
                            </FormGroup>

                            <FormGroup controlId="numTelefono" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Número de teléfono"
                                    value={this.state.data.numTelefono}
                                    onChange={event => this.setState({numTelefono: event.target.value})}
                                />
                            </FormGroup>

                            <FormGroup controlId="direccion" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Dirección"
                                    value={this.state.data.direccion}
                                    onChange={event => this.setState({direccion: event.target.value})}
                                />
                            </FormGroup>

                            <FormGroup controlId="correoElectronico" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Correo electrónico"
                                    value={this.state.data.correoElectronico}
                                    onChange={event => this.setState({correoElectronico: event.target.value})}
                                />
                            </FormGroup>

                            <FormGroup controlId="notaMedia" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Latitud, longitud"
                                    value={this.state.data.latLng}
                                    onChange={event => this.setState({latLng: event.target.value})}
                                />
                            </FormGroup>

                            <FormGroup controlId="tutorLaboral" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Nombre del tutor laboral"
                                    value={this.state.data.nombreTutorLaboral}
                                    onChange={event => this.setState({nombreTutorLaboral: event.target.value})}
                                />
                            </FormGroup>

                            <FormGroup controlId="emailTutorLaboral" bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder=" Correo electrónico del tutor laboral"
                                    value={this.state.data.emailTutorLaboral}
                                    onChange={event => this.setState({emailTutorLaboral: event.target.value})}
                                />
                            </FormGroup>


                            <Button className=" btn btn-lg btn-primary btn-block" type="button" onClick={()=>{this.editar(this.state.data._id)}}>Guardar empresa</Button>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalEdicionEmpresa