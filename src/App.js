import React, {Component} from 'react';
import Header from './components/Header';
import Nuevacita from './components/Nuevacita';
import ListaCitas from './components/Listacitas';


class App extends Component{
  state={
    citas:[]
  }

  //cuando la aplicacion carga
  componentDidMount(){
    //cargamos lo del local storage una vez que este listo el documento
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
        this.setState({
          //json parse lo convierte en un arreglo de objetos si está bien guardado
            citas : JSON.parse(citasLS)
        })
    }


  }

  //cuando eliminamos o agregamos un turno nuevo

  componentDidUpdate(){
    //local storage solo guarda strings, asì que lo convertimos en un JSON
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
    //lo convierte de un arreglo a un string
  }

  //de esta manera paso datos de un componente hijo a un padre
  crearNuevaCita = datos =>{
    //copiar el state actual
    const citas = [...this.state.citas, datos];
    //agregar nuevo state
    this.setState({
      citas : citas
    })

  }


  //eliminar citas del state
  eliminarCita = id => {
    //copiar el state
    const citasActuales = [...this.state.citas];

    //usar filter para sacar el ID del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);
    //el filter accede a cada uno de los resultados del array y filtra

    //actualizar el state
    this.setState({
      citas
    })

  }

  render(){
    return(
      <div className="container py-5">
          <Header
              titulo='Administrador Veterinaria'
          />
          <Nuevacita
            crearNuevaCita={this.crearNuevaCita}
          />
          <div className="p-5 mt-5 bg-white shadow-sm">
            <ListaCitas
                //le paso el state con las citas
                citas={this.state.citas}
                eliminarCita={this.eliminarCita}
            />          
          </div>
      </div>
    );
  }
}

export default App;
