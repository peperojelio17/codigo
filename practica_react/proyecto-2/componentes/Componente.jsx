import React, {Component} from 'react'


function Componente (props){
    return <h2>{props.msg}</h2>
}

// const Componente = (props) => <h2>{props.msg}</h2> "Hola soy un componente Funcional Expresado desde una prop"

// class Componente extends Component{
//     render(){
//         return <h2>{this.props.msg}</h2> "Hola soy un componente basado en clase desde una prop"
//     }
// }

export default Componente