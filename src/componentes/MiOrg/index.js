import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado -hooks
    //useState
    //const [nombreVarible, funcionActualiza] = useState(valorInicial)
      console.log(props)
    //const [mostrar,actualizarMostrar] = useState(true)
    //const manejarClick = () => {
        //console.log("Mostrar/Ocultar elemento", !mostrar)
        //actualizarMostrar(!mostrar)


    return <section className="orgSection">
        <h3 className="title">Mi organizacion </h3>
        <img src="../imagenes/add.png" alt="icono" onClick={props.cambiarMostrar}/>
    </section>






}

export default MiOrg