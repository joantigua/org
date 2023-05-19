import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import { useState } from 'react';
import Footer from './components/Footer';
import {v4 as uuid} from 'uuid'

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState()
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/joantigua.png",
      nombre: "Joseph Antigua",
      puesto: "Developer", 
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/joantigua.png",
      nombre: "Joseph Antigua",
      puesto: "Developer", 
      fav: true
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/joantigua.png",
      nombre: "Joseph Antigua",
      puesto: "Developer", 
      fav: true
    },
    {
      id: uuid(),
      equipo: "DevOps",
      foto: "https://github.com/joantigua.png",
      nombre: "Joseph Antigua",
      puesto: "Developer", 
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseno",
      foto: "https://github.com/joantigua.png",
      nombre: "Joseph Antigua",
      puesto: "Developer", 
      fav: true
    },
    {
      id: uuid(),
      equipo: "Movil",
      foto: "https://github.com/joantigua.png",
      nombre: "Joseph Antigua",
      puesto: "Developer", 
      fav: true
    },
    {
      id: uuid(),
      equipo: "Innovacion y Gestion",
      foto: "https://github.com/joantigua.png",
      nombre: "Joseph Antigua",
      puesto: "Developer", 
      fav: true
    },
  ])

  const [mostrarLike, actualizarLike] = useState()
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278"
    },
    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#E8F8FF",
      colorSecundario: "#82CFFA"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69"
    },
    {
      id: uuid(),
      titulo: "UX y Diseno",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFF5D9",
      colorSecundario: "#FFBA05"
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FFEEDF",
      colorSecundario: "#FF8A29"
    }
  ])
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorSecundario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const likesActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }

      return colaborador
    })

    actualizarLike(likesActualizados)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      { equipos.map((equipo) => <Equipo 
        like = {like}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor={actualizarColor}
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
