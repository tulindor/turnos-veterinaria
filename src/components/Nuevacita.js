import React, {Component} from 'react';
import uuid from 'uuid';


//creo un estado inicial del state
const stateInicial = {
    cita: {
        mascota: '',
        propietario:'',
        fecha: '',
        hora:'',
        sintomas:''
    },
    error:false
}

class Nuevacita extends Component{
    state = {...stateInicial}

    //cuando se agrega data a los inputs

    handleChange = (e) => {
        console.log(e.target.name + ': ' + e.target.value);

        //colocarlo en el state

        this.setState({
            cita : {
                ...this.state.cita, //hace una copia del state para traer tods los datos
                [e.target.name] : e.target.value
            }
        })
    }

    //cuando hace el submit

    handleSubmit = (e) =>{
        e.preventDefault();

        //extraer los valores del state
        const{mascota,propietario,fecha,hora,sintomas} = this.state.cita;

        //validar que todos estén llenos
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error:true
            });

            //detener la ejecucion
            return;
        }

        //genero un objeto con los datos (usando UUID)
        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid();

        //agregar la cita del state a APP
        //esto toma el objeto con los datos del state
        this.props.crearNuevaCita(nuevaCita)

        //colocar en el state inicial, blanquea el status del form en el submit
        this.setState({
            ...stateInicial
        })

    }

    render(){

        //extraer valor del state
        const {error} = this.state;

        return(
            <div className="p-5 rounded bg-white shadow-sm">
                <div className="bg-light rounded mb-5">
                    <h5 className="text-center p-3">
                            Llenar el formulario
                    </h5>
                </div>

                {error ? <div className="alert alert-danger bg-danger text-white mb-5 text-center">
                    Todos los campos son obligatorios
                </div> : null}

                <form
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group row">
                        <div className="col-lg-6 mb-3">
                            <label>Nombre de Mascota</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre de Mascota"
                                name="mascota"
                                onChange={this.handleChange}
                                value={this.state.cita.mascota}
                            />
                        </div>

                        <div className="col-lg-6 mb-3">
                            <label>Nombre del Dueño</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre del Dueño"
                                name="propietario"
                                onChange={this.handleChange}
                                value={this.state.cita.propietario}
                            />
                        </div>

                        <div className="col-lg-6 mb-3">
                            <label>Fecha</label>
                            <input
                                type="date"
                                className="form-control"
                                name="fecha"
                                onChange={this.handleChange}
                                value={this.state.cita.fecha}
                            />
                        </div>

                        <div className="col-lg-6 mb-3">
                            <label>Horario</label>
                            <input
                                type="time"
                                className="form-control"
                                name="hora"
                                onChange={this.handleChange}
                                value={this.state.cita.hora}
                            />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <label>Síntomas</label>
                            <textarea
                                className="form-control"
                                placeholder="Descripción de los sintomas"
                                name="sintomas"
                                onChange={this.handleChange}
                                value={this.state.cita.sintomas}
                            >
                            </textarea>
                        </div>
                        <div className="col-12 text-center">
                            <input 
                                type="submit" 
                                className="btn btn-success btn-lg"
                                value="Agregar Turno"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Nuevacita;