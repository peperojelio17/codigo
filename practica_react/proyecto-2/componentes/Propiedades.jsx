import React from 'react'
import PropTypes from "prop-types"

function Propiedades(props) {
  return (
    <div>
        <h2>Propiedades {props.porDefecto}</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.bool ? "verdadero" : "falso"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{props.objeto.nombre + "-" + props.objeto.correo}</li>
            <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteReact}</li>
        </ul>
    </div>
  )
}

Propiedades.defaultProps = {
    porDefecto : "Las Props"
}

Propiedades.PropTypes = {
    numero : PropTypes.number.isRequired //Significa que a la propiedad numero solicita un valor que sea tipo "number" y que no este vacia "isRequired"
}


export default Propiedades