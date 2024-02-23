import React, { Component } from 'react'

function EstadoaHijo(props) {
  return (
    <div>
        <h3>{props.contadorHijo}</h3>
    </div>
  )
}

export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador : 0,
        }
    setInterval(() => { //Tecnicamente no es una buena practica hacer esto ya que te sale un warning.
        this.setState({
            contador: this.state.contador + 1
        })
    }, 1000);
}

    render(){
        return (
            <div>
                <h2>El states</h2>
                <p>{this.state.contador}</p>
                <EstadoaHijo contadorHijo={this.state.contador}/>

            </div>
            )
        }
}
