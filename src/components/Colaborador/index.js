import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
const {nombre, foto, puesto, id, fav} = props.colaborador
const {colorSecundario, eliminarColaborador, like} = props

    return(
        <div className="colaborador">
            <AiFillCloseCircle className="eliminarColaborador" onClick={() => eliminarColaborador(id)}/>
            <div className="encabezado" style={{backgroundColor:colorSecundario}}>
                <img src= {foto} alt={nombre}/>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
            </div>
        </div>
    )
}

export default Colaborador