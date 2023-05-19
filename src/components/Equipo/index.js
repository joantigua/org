import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'


const Equipo = (props) => {
    const {titulo, colorPrimario, colorSecundario, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const estiloTitulo = {backgroundColor:hexToRgba(colorSecundario, 0.6)}
    const estiloBackground = {borderColor:colorSecundario}
    return <> 
    {colaboradores.length > 0 && (
        <section className="equipo" style={estiloTitulo}>
            <input 
                type="color"
                className="inputColor"
                value={colorSecundario}
                onChange={(e) => {
                    actualizarColor(e.target.value, id)
                }}
            />
            <h3 style={estiloBackground}>{titulo}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, index) => <Colaborador
                    like={like}
                    key={index}
                    colaborador={colaborador}
                    colorSecundario={colorSecundario}
                    eliminarColaborador={eliminarColaborador}
                />)}
            </div>
        </section>
    )
    }
    </>
}

export default Equipo