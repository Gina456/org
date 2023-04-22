import "./Colaborador.css"
import { AiFillCloseCircle,AiOutlineHeart,AiFillHeart } from "react-icons/ai";

    const Colaborador = (props) => {
    const{nombre,puesto,Foto,equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    //condicion ? verdadero : false

    return <div className="colaborador" >
        <AiFillCloseCircle className="eliminar" onClick={ () => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario }} >
            <img src={Foto} alt={nombre} />
        </div>
        <div className="info" >
            <h4>{nombre} </h4>
            <h5> {puesto} </h5>
            {fav ? <AiFillHeart  onClick={ () => like(id)} color="#900C3F"/> :  <AiOutlineHeart onClick={ () => like(id)} />}
            
        </div>
    </div>
}

            
export default Colaborador