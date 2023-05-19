import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import { useState } from "react"

const Formulario = (props) => {

    const {registrarColaborador, crearEquipo} = props
    
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        registrarColaborador({nombre, puesto, foto, equipo})
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorSecundario: color})
    }

    return (
    <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                valor={nombre} 
                actualizarValor={actualizarNombre}
                required
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                valor={puesto} 
                actualizarValor={actualizarPuesto}
                required
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                valor={foto} 
                actualizarValor={actualizarFoto}
                required
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={actualizarEquipo}
                equipos={props.equipos}
                tipoOpciones="equipo"
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar Titulo"
                valor={titulo} 
                actualizarValor={actualizarTitulo}
                required
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar color en Hex"
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
                required
            />
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>)
}

export default Formulario